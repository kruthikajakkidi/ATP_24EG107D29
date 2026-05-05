import { Schema, model, Types } from "mongoose"

const articleSchema = new Schema({

  author: {
    type: Types.ObjectId,
    ref: "user",
    required: [true, "author id is required"]
  },

  title: {
    type: String,
    required: [true, "title is required"]
  },

  category: {
    type: String,
    required: [true, "category is required"]
  },

  content: {
    type: String,
    required: [true, "content is required"]
  },

  isArticleActive: {
    type: Boolean,
    default: true
  },

  // each comment stores the user ref, text and time
  comments: [
    {
      user: {
        type: Types.ObjectId,
        ref: "user",
        required: true
      },
      comment: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ]

}, {
  timestamps: true,
  versionKey: false,
  strict: true
})

export const ArticleModel = model("article", articleSchema)