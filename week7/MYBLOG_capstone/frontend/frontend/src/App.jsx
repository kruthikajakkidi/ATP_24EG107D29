import { createBrowserRouter, RouterProvider } from "react-router"

import RootLayout from "./components/RootLayout"
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import UserProfile from "./components/UserProfile"
import AuthorProfile from "./components/AuthorProfile"
import AuthorArticles from "./components/AuthorArticles"
import EditArticle from "./components/EditArticle"
import WriteArticles from "./components/WriteArticles"
import ArticleByID from "./components/ArticleById"
import AdminProfile from "./components/AdminProfile"
import ProtectedRoute from "./components/ProtectedRoute"
import Unauthorized from "./components/Unauthorized"

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "unauthorized",
          element: <Unauthorized />,
        },
        {
          path: "user-profile",
          element: (
            <ProtectedRoute allowedRoles={["USER"]}>
              <UserProfile />
            </ProtectedRoute>
          ),
        },
        {
          path: "author-profile",
          element: (
            <ProtectedRoute allowedRoles={["AUTHOR"]}>
              <AuthorProfile />
            </ProtectedRoute>
          ),
          children: [
            {
              index: true,
              element: <AuthorArticles />,
            },
            {
              path: "articles",
              element: <AuthorArticles />,
            },
            {
              path: "write-article",
              element: <WriteArticles />,
            },
          ],
        },
        {
          path: "admin-profile",
          element: (
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <AdminProfile />
            </ProtectedRoute>
          ),
        },
        {
          path: "article/:id",
          element: (
            <ProtectedRoute allowedRoles={["USER", "AUTHOR", "ADMIN"]}>
              <ArticleByID />
            </ProtectedRoute>
          ),
        },
        {
          path: "edit-article",
          element: (
            <ProtectedRoute allowedRoles={["AUTHOR"]}>
              <EditArticle />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ])

  return <RouterProvider router={routerObj} />
}

export default App