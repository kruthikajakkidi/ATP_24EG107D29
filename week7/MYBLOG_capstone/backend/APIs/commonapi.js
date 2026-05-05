import exp from "express"
import { UserModel } from "../models/UserModel.js"
import { hash, compare } from "bcryptjs"
import { config } from "dotenv"
import jwt from "jsonwebtoken"
import { verifyToken } from "../middlewares/verifyToken.js"
import { upload } from "../config/multer.js"
import { uploadToCloudinary } from "../config/cloudinaryUpload.js"
import cloudinary from "../config/cloudinary.js"

const { sign } = jwt
export const commonApp = exp.Router()
config()

// register a new user or author
commonApp.post("/users", upload.single("profileImageUrl"), async (req, res, next) => {
  let cloudinaryResult
  try {
    let allowedRoles = ["USER", "AUTHOR"]
    const newUser = req.body

    if (!allowedRoles.includes(newUser.role)) {
      return res.status(400).json({ message: "Invalid role" })
    }

    if (req.file) {
      cloudinaryResult = await uploadToCloudinary(req.file.buffer)
    }

    newUser.profileImageUrl = cloudinaryResult?.secure_url
    newUser.password = await hash(newUser.password, 12)

    const newUserDoc = new UserModel(newUser)
    await newUserDoc.save()

    res.status(201).json({ message: "User created" })
  } catch (err) {
    console.log("err is ", err)
    if (cloudinaryResult?.public_id) {
      await cloudinary.uploader.destroy(cloudinaryResult.public_id)
    }
    next(err)
  }
})

// login for user, author and admin
commonApp.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await UserModel.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: "Invalid email" })
    }
    const isMatched = await compare(password, user.password)
    if (!isMatched) {
      return res.status(400).json({ message: "Invalid password" })
    }

    const signedToken = sign(
      {
        id: user._id,
        email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        profileImageUrl: user.profileImageUrl,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    )

    res.cookie("token", signedToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })

    let userObj = user.toObject()
    delete userObj.password

    res.status(200).json({ message: "Login success", payload: userObj })
  } catch (err) {
    next(err)
  }
})

// clear the cookie to log out
commonApp.get("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  })
  res.status(200).json({ message: "Logout success" })
})

// check if user is still authenticated on page refresh
commonApp.get("/check-auth", verifyToken("USER", "AUTHOR", "ADMIN"), (req, res) => {
  res.status(200).json({
    message: "Authenticated",
    payload: req.user,
  })
})

// change password
commonApp.put("/password", verifyToken("USER", "AUTHOR", "ADMIN"), async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body

    const user = await UserModel.findById(req.user.id)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    const isMatched = await compare(currentPassword, user.password)
    if (!isMatched) {
      return res.status(400).json({ message: "Current password is incorrect" })
    }

    const isSamePassword = await compare(newPassword, user.password)
    if (isSamePassword) {
      return res.status(400).json({ message: "New password must differ from current password" })
    }

    user.password = await hash(newPassword, 12)
    await user.save()

    res.status(200).json({ message: "Password changed successfully" })
  } catch (err) {
    next(err)
  }
})