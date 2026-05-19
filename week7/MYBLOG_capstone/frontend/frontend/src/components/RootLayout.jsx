import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router"
import { useEffect } from "react"
import { useAuth } from "../store/AuthStore"

function RootLayout() {

  const checkAuth = useAuth((state) => state.checkAuth)
  const loading = useAuth((state) => state.loading)

  // check if user is still logged in on page load
  useEffect(() => {
    checkAuth()
  }, [])

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#111111]">
        <p className="text-gray-400 text-sm">
          Loading...
        </p>
      </div>
    )

  return (

    <div className="w-full min-h-screen overflow-x-hidden bg-[#111111] text-white">

      <Header />

      <main className="w-full">
        <Outlet />
      </main>

      <Footer />

    </div>

  )
}

export default RootLayout