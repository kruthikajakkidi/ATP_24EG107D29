# My Blog Application – Backend

## Overview

This is the backend of the **My Blog Application**, a MERN stack blogging platform with JWT authentication and role-based authorization.

The backend handles:
- Authentication
- Blog APIs
- User Management
- Admin Controls
- Cloudinary Uploads
- Database Operations

---

# Features

## Authentication
- JWT Login & Registration
- Password Hashing using bcrypt
- Protected Routes

## Authorization
- Role-Based Access Control
- Admin, Author, and User Permissions

## Blog Management
- Create Blogs
- Update Blogs
- Delete Blogs
- Fetch Blogs

## User Management
- Profile Update
- Profile Image Upload
- Account Blocking

## Admin Dashboard
- Manage Users
- Control Access

---

# Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Cloudinary
- Multer
- dotenv
- CORS

---

# Folder Structure

```bash
backend/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
├── utils/
├── uploads/
├── server.js
├── package.json
└── .env
