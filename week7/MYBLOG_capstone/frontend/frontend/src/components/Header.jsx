import { NavLink } from "react-router"
import { useAuth } from "../store/AuthStore"
import { useState } from "react"

function Header() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated)
  const user = useAuth((state) => state.currentUser)
  const [menuOpen, setMenuOpen] = useState(false)

  const getProfilePath = () => {
    if (!user) return "/"
    switch (user.role) {
      case "AUTHOR": return "/author-profile"
      case "ADMIN": return "/admin-profile"
      default: return "/user-profile"
    }
  }

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-amber-400 text-base font-semibold"
      : "text-white/70 text-base hover:text-white transition"

  return (
    <nav className="bg-stone-900 px-4 sm:px-8 md:px-16 lg:px-32 py-4 flex items-center justify-between">

      {/* logo */}
      <NavLink to="/" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
        MyBlog
      </NavLink>

      {/* hamburger for mobile */}
      <button
        className="text-white sm:hidden text-2xl"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? "x" : "="}
      </button>

      {/* desktop nav */}
      <ul className="hidden sm:flex items-center gap-8">
        <li><NavLink to="/" end className={linkClass}>Home</NavLink></li>

        {!isAuthenticated && (
          <>
            <li><NavLink to="/register" className={linkClass}>Register</NavLink></li>
            <li><NavLink to="/login" className={linkClass}>Login</NavLink></li>
          </>
        )}

        {isAuthenticated && (
          <li><NavLink to={getProfilePath()} className={linkClass}>Profile</NavLink></li>
        )}
      </ul>

      {/* mobile nav */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-stone-900 flex flex-col items-start gap-4 px-6 py-4 sm:hidden z-50">
          <li><NavLink to="/" end className={linkClass} onClick={() => setMenuOpen(false)}>Home</NavLink></li>

          {!isAuthenticated && (
            <>
              <li><NavLink to="/register" className={linkClass} onClick={() => setMenuOpen(false)}>Register</NavLink></li>
              <li><NavLink to="/login" className={linkClass} onClick={() => setMenuOpen(false)}>Login</NavLink></li>
            </>
          )}

          {isAuthenticated && (
            <li><NavLink to={getProfilePath()} className={linkClass} onClick={() => setMenuOpen(false)}>Profile</NavLink></li>
          )}
        </ul>
      )}

    </nav>
  )
}

export default Header