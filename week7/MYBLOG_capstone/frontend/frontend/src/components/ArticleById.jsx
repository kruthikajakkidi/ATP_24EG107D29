import { useParams, useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { useAuth } from "../store/AuthStore"
import { toast } from "react-hot-toast"
import { useForm } from "react-hook-form"
import api from "../services/api"
import {
  articlePageWrapper, articleHeader, articleCategory, articleMainTitle,
  articleAuthorRow, authorInfo, articleContent, articleFooter,
  articleActions, editBtn, deleteBtn, loadingClass, errorClass,
  inputClass, commentsWrapper, commentCard, commentHeader,
  commentUserRow, avatar, commentUser, commentTime, commentText,
} from "../styles/common.js"

function ArticleByID() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, reset: resetForm } = useForm()

  const user = useAuth((state) => state.currentUser)
  const authLoading = useAuth((state) => state.loading)

  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [commentLoading, setCommentLoading] = useState(false)

  useEffect(() => {
    const getArticle = async () => {
      setLoading(true)
      try {
        let res

        // fetch based on role to avoid unnecessary fallback
        if (user?.role === "AUTHOR") {
          res = await api.get("/author-api/articles")
          const found = res.data.payload?.find((a) => a._id === id)
          if (!found) throw new Error("Article not found")
          setArticle(found)
        } else {
          res = await api.get(`/user-api/article/${id}`)
          setArticle(res.data.payload)
        }
      } catch (err) {
        setError(err.response?.data?.message || err.message || "Failed to load article")
      } finally {
        setLoading(false)
      }
    }
    getArticle()
  }, [id, user])

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    })
  }

  const toggleArticleStatus = async () => {
    const newStatus = !article.isArticleActive
    if (!window.confirm(newStatus ? "Restore this article?" : "Delete this article?")) return
    try {
      const res = await api.patch("/author-api/articles", {
        articleId: article._id,
        isArticleActive: newStatus,
      })
      setArticle(res.data.payload)
      toast.success(res.data.message)
    } catch (err) {
      toast.error(err.response?.data?.message || "Operation failed")
    }
  }

  const editArticle = (articleObj) => {
    navigate("/edit-article", { state: articleObj })
  }

  const addComment = async (commentObj) => {
    if (!commentObj.comment?.trim()) {
      toast.error("Please write a comment before submitting")
      return
    }
    try {
      setCommentLoading(true)
      commentObj.articleId = article._id
      const res = await api.put("/user-api/articles", commentObj)
      if (res.status === 200) {
        setArticle(res.data.payload)
        resetForm()
        toast.success("Comment added!")
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add comment")
    } finally {
      setCommentLoading(false)
    }
  }

  const deleteComment = async (commentId) => {
    if (!window.confirm("Delete this comment?")) return
    try {
      if (user?.role === "USER") {
        const res = await api.delete(`/user-api/articles/${article._id}/comments/${commentId}`)
        setArticle(res.data.payload)
      } else if (user?.role === "AUTHOR") {
        const res = await api.delete(`/author-api/articles/${article._id}/comments/${commentId}`)
        setArticle(res.data.payload)
      }
      toast.success("Comment deleted")
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete comment")
    }
  }

  if (loading) return <p className={loadingClass}>Loading article...</p>
  if (error) return <p className={errorClass}>{error}</p>
  if (!article) return null

  return (
    <div className={articlePageWrapper}>

      <div className={articleHeader}>
        <span className={articleCategory}>{article.category}</span>
        <h1 className={`${articleMainTitle} uppercase`}>{article.title}</h1>
        <div className={articleAuthorRow}>
          <div className={authorInfo}>{user?.role}</div>
          <div>{formatDate(article.createdAt)}</div>
        </div>
      </div>

      <div className={articleContent}>{article.content}</div>

      {user?.role === "AUTHOR" && (
        <div className={articleActions}>
          <button className={editBtn} onClick={() => editArticle(article)}>Edit</button>
          <button className={deleteBtn} onClick={toggleArticleStatus}>
            {article.isArticleActive ? "Delete" : "Restore"}
          </button>
        </div>
      )}

      {user?.role === "USER" && (
        <div className={articleActions}>
          <h3 className="text-lg font-semibold text-[#1d1d1f] mb-3">Add a Comment</h3>
          <form onSubmit={handleSubmit(addComment)}>
            <input
              type="text"
              {...register("comment", { required: true })}
              className={inputClass}
              placeholder="Write your comment here..."
            />
            <button
              type="submit"
              disabled={commentLoading}
              className="bg-amber-600 text-white px-5 py-2 rounded-2xl mt-4 hover:bg-black transition disabled:opacity-50"
            >
              {commentLoading ? "Posting..." : "Add Comment"}
            </button>
          </form>
        </div>
      )}

      {!authLoading && !user && (
        <div className="mt-6 p-4 bg-gray-100 rounded-xl text-center text-sm text-gray-500">
          Please{" "}
          <span
            className="text-blue-600 cursor-pointer font-medium"
            onClick={() => navigate("/login")}
          >
            log in
          </span>{" "}
          to add a comment.
        </div>
      )}

      <div className={commentsWrapper}>
        <h3 className="text-lg font-semibold text-[#1d1d1f] mb-4">
          Comments ({article.comments?.length || 0})
        </h3>

        {article.comments?.length === 0 && (
          <p className="text-[#a1a1a6] text-sm text-center py-6">
            No comments yet. Be the first to comment!
          </p>
        )}

        {article.comments?.map((commentObj, index) => {
          const name = commentObj.user?.firstName
            ? `${commentObj.user.firstName} ${commentObj.user.lastName || ""}`.trim()
            : "Anonymous"

          const firstLetter = name.charAt(0).toUpperCase()

          const isOwnComment =
            commentObj.user?._id?.toString() === user?._id?.toString() ||
            commentObj.user?._id?.toString() === user?.id?.toString()

          const canDelete = user?.role === "AUTHOR" || (user?.role === "USER" && isOwnComment)

          return (
            <div key={index} className={commentCard}>
              <div className={commentHeader}>
                <div className={commentUserRow}>
                  <div className={avatar}>{firstLetter}</div>
                  <div>
                    <p className={commentUser}>{name}</p>
                    <p className={commentTime}>{formatDate(commentObj.createdAt || new Date())}</p>
                  </div>
                </div>

                {canDelete && (
                  <button
                    onClick={() => deleteComment(commentObj._id)}
                    className="ml-auto text-xs text-red-400 hover:text-red-600 transition px-2 py-1 rounded hover:bg-red-50"
                  >
                    Delete
                  </button>
                )}
              </div>
              <p className={commentText}>{commentObj.comment}</p>
            </div>
          )
        })}
      </div>

      <div className={articleFooter}>
        Last updated: {formatDate(article.updatedAt)}
      </div>
    </div>
  )
}

export default ArticleByID