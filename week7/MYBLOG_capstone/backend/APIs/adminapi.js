import exp from "express"
import { UserModel } from "../models/UserModel.js"
import { ArticleModel } from "../models/ArticleModel.js"
import { verifyToken } from "../middlewares/verifyToken.js"

export const adminApp = exp.Router()


// get all users and authors (no admins, no passwords)
adminApp.get("/users", verifyToken("ADMIN"), async (req, res) => {
  try {
    const users = await UserModel.find(
      { role: { $in: ["USER", "AUTHOR"] } },
      { password: 0 }
    )
    res.status(200).json({ message: "users", payload: users })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// block or unblock a user
adminApp.patch("/users/:userId", verifyToken("ADMIN"), async (req, res) => {
  try {
    const { userId } = req.params
    const { isUserActive } = req.body

    // admin cant block themselves
    if (userId === req.user.id?.toString()) {
      return res.status(400).json({ message: "Admin cannot deactivate their own account" })
    }

    const user = await UserModel.findById(userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // no change needed if already in same state
    if (user.isUserActive === isUserActive) {
      return res.status(200).json({ message: "User already in same state", payload: user })
    }

    user.isUserActive = isUserActive
    await user.save()

    const userObj = user.toObject()
    delete userObj.password

    res.status(200).json({
      message: `User ${isUserActive ? "activated" : "deactivated"} successfully`,
      payload: userObj,
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// delete user and all their articles
adminApp.delete("/users/:userId", verifyToken("ADMIN"), async (req, res) => {
  try {
    const { userId } = req.params

    // admin cant delete themselves
    if (userId === req.user.id?.toString()) {
      return res.status(400).json({ message: "Admin cannot delete their own account" })
    }

    const user = await UserModel.findById(userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // remove all articles by this user first
    await ArticleModel.deleteMany({ author: userId })

    await UserModel.findByIdAndDelete(userId)

    res.status(200).json({ message: "User and their articles deleted successfully" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// get all articles with author info
adminApp.get("/articles", verifyToken("ADMIN"), async (req, res) => {
  try {
    const articles = await ArticleModel.find()
      .populate("author", "firstName lastName email role")
      .sort({ createdAt: -1 })
    res.status(200).json({ message: "articles", payload: articles })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// activate or deactivate an article
adminApp.patch("/articles/:articleId", verifyToken("ADMIN"), async (req, res) => {
  try {
    const { articleId } = req.params
    const { isArticleActive } = req.body

    const article = await ArticleModel.findById(articleId)
    if (!article) {
      return res.status(404).json({ message: "Article not found" })
    }

    // skip if already in same state
    if (article.isArticleActive === isArticleActive) {
      return res.status(200).json({ message: "Article already in same state", payload: article })
    }

    article.isArticleActive = isArticleActive
    await article.save()

    res.status(200).json({
      message: `Article ${isArticleActive ? "restored" : "deleted"} successfully`,
      payload: article,
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// permanently delete an article
adminApp.delete("/articles/:articleId", verifyToken("ADMIN"), async (req, res) => {
  try {
    const { articleId } = req.params

    const article = await ArticleModel.findByIdAndDelete(articleId)
    if (!article) {
      return res.status(404).json({ message: "Article not found" })
    }

    res.status(200).json({ message: "Article permanently deleted" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


// delete any comment on any article
adminApp.delete(
  "/articles/:articleId/comments/:commentId",
  verifyToken("ADMIN"),
  async (req, res) => {
    try {
      const { articleId, commentId } = req.params

      const article = await ArticleModel.findById(articleId)
      if (!article) {
        return res.status(404).json({ message: "Article not found" })
      }

      const comment = article.comments.id(commentId)
      if (!comment) {
        return res.status(404).json({ message: "Comment not found" })
      }

      // remove the comment and save
      article.comments.pull({ _id: commentId })
      await article.save()

      const populated = await ArticleModel.findById(articleId).populate(
        "comments.user",
        "email firstName lastName"
      )

      res.status(200).json({ message: "Comment deleted", payload: populated })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }
)


// get overall stats for dashboard
adminApp.get("/stats", verifyToken("ADMIN"), async (req, res) => {
  try {
    const [
      totalUsers,
      activeUsers,
      totalAuthors,
      totalArticles,
      activeArticles,
      totalComments,
    ] = await Promise.all([
      UserModel.countDocuments({ role: { $in: ["USER", "AUTHOR"] } }),
      UserModel.countDocuments({ role: "USER", isUserActive: true }),
      UserModel.countDocuments({ role: "AUTHOR", isUserActive: true }),
      ArticleModel.countDocuments(),
      ArticleModel.countDocuments({ isArticleActive: true }),
      ArticleModel.aggregate([
        { $project: { commentCount: { $size: "$comments" } } },
        { $group: { _id: null, total: { $sum: "$commentCount" } } },
      ]),
    ])

    res.status(200).json({
      message: "stats",
      payload: {
        totalUsers,
        activeUsers,
        totalAuthors,
        totalArticles,
        activeArticles,
        inactiveArticles: totalArticles - activeArticles,
        totalComments: totalComments[0]?.total || 0,
      },
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})