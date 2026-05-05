import exp from "express"
import { ArticleModel } from "../models/ArticleModel.js"
import { verifyToken } from "../middlewares/verifyToken.js"

export const authorApp = exp.Router()


// create a new article
authorApp.post("/article", verifyToken("AUTHOR"), async (req, res) => {
  try {
    const articleObj = req.body

    // make sure author is posting their own article
    if (articleObj.author?.toString() !== req.user.id?.toString()) {
      return res.status(403).json({ message: "you are not authorised to publish other author articles" })
    }

    const articleDoc = new ArticleModel(articleObj)
    await articleDoc.save()

    res.status(201).json({ message: "article published successfully" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// get all articles by the logged in author
authorApp.get("/articles", verifyToken("AUTHOR"), async (req, res) => {
  try {
    const idOfToken = req.user?.id
    const articlesList = await ArticleModel.find({ author: idOfToken })
    res.status(200).json({ message: "articles", payload: articlesList })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// edit an existing article
authorApp.put("/articles", verifyToken("AUTHOR"), async (req, res) => {
  try {
    const authorIdOfToken = req.user?.id
    const { articleId, title, category, content } = req.body

    const modifiedArticle = await ArticleModel.findOneAndUpdate(
      { _id: articleId, author: authorIdOfToken },
      { $set: { title, category, content } },
      { new: true }
    )

    // if null, article doesnt belong to this author
    if (!modifiedArticle) {
      return res.status(403).json({ message: "Not authorized to edit article" })
    }

    res.status(200).json({ message: "Article modified", payload: modifiedArticle })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// soft delete or restore an article
authorApp.patch("/articles", verifyToken("AUTHOR"), async (req, res) => {
  try {
    const authorIdOfToken = req.user?.id
    const { articleId, isArticleActive } = req.body

    const articleOfDB = await ArticleModel.findOne({ _id: articleId, author: authorIdOfToken })
    if (!articleOfDB) {
      return res.status(404).json({ message: "article not found" })
    }

    // skip if status is already the same
    if (isArticleActive === articleOfDB.isArticleActive) {
      return res.status(200).json({ message: "article already in same state" })
    }

    articleOfDB.isArticleActive = isArticleActive
    await articleOfDB.save()

    res.status(200).json({ message: "article status updated", payload: articleOfDB })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// author can delete any comment on their article
authorApp.delete("/articles/:articleId/comments/:commentId", verifyToken("AUTHOR"), async (req, res) => {
  try {
    const { articleId, commentId } = req.params
    const authorIdOfToken = req.user?.id

    // check article belongs to this author
    const article = await ArticleModel.findOne({ _id: articleId, author: authorIdOfToken })
    if (!article) {
      return res.status(404).json({ message: "article not found or not your article" })
    }

    const comment = article.comments.id(commentId)
    if (!comment) {
      return res.status(404).json({ message: "comment not found" })
    }

    // remove comment and save
    article.comments.pull({ _id: commentId })
    await article.save()

    // return article with populated comment users
    const populatedArticle = await ArticleModel.findById(articleId).populate(
      "comments.user",
      "email firstName lastName"
    )

    res.status(200).json({ message: "comment deleted", payload: populatedArticle })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})