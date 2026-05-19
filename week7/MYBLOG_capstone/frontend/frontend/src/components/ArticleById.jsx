// ========================= ARTICLEBYID.JSX =========================

import { useParams, useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { useAuth } from "../store/AuthStore"
import { toast } from "react-hot-toast"
import { useForm } from "react-hook-form"
import api from "../services/api"

function ArticleByID() {

  const { id } = useParams()

  const navigate = useNavigate()

  const { register, handleSubmit, reset } = useForm()

  const user = useAuth((state) => state.currentUser)

  const [article, setArticle] = useState(null)

  const [loading, setLoading] = useState(false)

  const [commentLoading, setCommentLoading] = useState(false)



  useEffect(() => {

    const getArticle = async () => {

      try {

        setLoading(true)

        let res = await api.get(`/user-api/article/${id}`)

        setArticle(res.data.payload)

      } catch (err) {

        toast.error("Failed to load article")

      } finally {

        setLoading(false)

      }

    }

    getArticle()

  }, [id])



  const addComment = async (commentObj) => {

    try {

      setCommentLoading(true)

      commentObj.articleId = article._id

      let res = await api.put("/user-api/articles", commentObj)

      setArticle(res.data.payload)

      reset()

      toast.success("Comment added!")

    } catch (err) {

      toast.error("Failed to add comment")

    } finally {

      setCommentLoading(false)

    }

  }



  if (loading) {

    return (
      <div className="min-h-screen bg-[#111111] flex justify-center items-center text-white">
        Loading article...
      </div>
    )

  }



  return (

    <div className="min-h-screen bg-[#111111] text-white px-4 md:px-10 py-10">

      <div className="max-w-5xl mx-auto">

        {/* title */}
        <div className="mb-10">

          <p className="text-[#FACC15] uppercase tracking-[0.2em] text-sm mb-4">
            {article?.category}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {article?.title}
          </h1>

          <p className="text-white/50">
            Published on{" "}
            {new Date(article?.createdAt).toLocaleDateString()}
          </p>

        </div>





        {/* content */}
        <div className="bg-[#1A1A1A] border border-white/10 rounded-[35px] p-8 md:p-12 text-white/80 leading-loose text-lg shadow-2xl mb-10">

          {article?.content}

        </div>







        {/* comment form */}
        {user?.role === "USER" && (

          <div className="bg-[#1A1A1A] border border-white/10 rounded-[35px] p-8 mb-2">

            <h2 className="text-2xl font-semibold mb-6">
              Add Comment
            </h2>

            <form onSubmit={handleSubmit(addComment)}>

              <textarea
                rows="4"
                placeholder="Write your thoughts..."
                className="w-full bg-[#222222] border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-gray-500 focus:border-[#FACC15] transition resize-none"
                {...register("comment")}
              />

              <button
                type="submit"
                disabled={commentLoading}
                className="mt-5 bg-[#FACC15] hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded-2xl transition"
              >

                {commentLoading ? "Posting..." : "Add Comment"}

              </button>

            </form>

          </div>

        )}








        {/* comments */}
        <div>

          <h2 className="text-2xl font-semibold mb-6">
            Comments ({article?.comments?.length || 0})
          </h2>

          <div className="space-y-5">

            {article?.comments?.map((commentObj, index) => (

              <div
                key={index}
                className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-6"
              >

                <div className="flex items-center gap-4 mb-4">

                  <div className="w-12 h-12 rounded-full bg-[#FACC15] text-black font-bold flex items-center justify-center">
                    {commentObj?.user?.firstName?.charAt(0)}
                  </div>

                  <div>

                    <p className="font-semibold text-white">
                      {commentObj?.user?.firstName}
                    </p>

                    <p className="text-sm text-white/40">
                      {new Date(commentObj?.createdAt).toLocaleDateString()}
                    </p>

                  </div>

                </div>

                <p className="text-white/70 leading-relaxed">
                  {commentObj?.comment}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  )

}

export default ArticleByID