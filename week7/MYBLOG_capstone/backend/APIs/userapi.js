import exp from "express"
import { verifyToken } from "../middlewares/verifyToken.js"
import { ArticleModel } from "../models/ArticleModel.js"

export const userApp = exp.Router()


// get all active articles
userApp.get("/articles", verifyToken("USER"), async (req, res) => {
  try {
    const articlesList = await ArticleModel.find({ isArticleActive: true })
    res.status(200).json({ message: "articles", payload: articlesList })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// get a single article by id with comments populated
userApp.get("/article/:id", verifyToken("USER"), async (req, res) => {
  try {
    const article = await ArticleModel.findById(req.params.id).populate(
      "comments.user",
      "email firstName lastName"
    )
    if (!article) {
      return res.status(404).json({ message: "article not found" })
    }
    res.status(200).json({ message: "article", payload: article })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// add a comment to an article
userApp.put("/articles", verifyToken("USER"), async (req, res) => {
  try {
    const { articleId, comment } = req.body

    const articleDocument = await ArticleModel.findOne({
      _id: articleId,
      isArticleActive: true,
    })
    if (!articleDocument) {
      return res.status(404).json({ message: "article not found" })
    }

    const userId = req.user?.id
    articleDocument.comments.push({ user: userId, comment: comment })
    await articleDocument.save()

    // refetch with populated user info for frontend
    const populatedArticle = await ArticleModel.findById(articleId).populate(
      "comments.user",
      "email firstName lastName"
    )

    res.status(200).json({
      message: "comment added successfully",
      payload: populatedArticle,
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// user can only delete their own comment
userApp.delete("/articles/:articleId/comments/:commentId", verifyToken("USER"), async (req, res) => {
  try {
    const { articleId, commentId } = req.params
    const userId = req.user?.id

    const article = await ArticleModel.findById(articleId)
    if (!article) {
      return res.status(404).json({ message: "article not found" })
    }

    const comment = article.comments.id(commentId)
    if (!comment) {
      return res.status(404).json({ message: "comment not found" })
    }

    // make sure comment belongs to this user
    if (comment.user?.toString() !== userId?.toString()) {
      return res.status(403).json({ message: "not authorised to delete this comment" })
    }

    // remove comment and save
    article.comments.pull({ _id: commentId })
    await article.save()

    const populatedArticle = await ArticleModel.findById(articleId).populate(
      "comments.user",
      "email firstName lastName"
    )

    res.status(200).json({ message: "comment deleted", payload: populatedArticle })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})