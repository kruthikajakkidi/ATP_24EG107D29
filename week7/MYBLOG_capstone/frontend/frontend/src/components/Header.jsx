import { NavLink } from "react-router"
import { useAuth } from "../store/AuthStore"
import {
  navbarClass, navContainerClass, navBrandClass,
  navLinksClass, navLinkClass, navLinkActiveClass,
} from "../styles/common"

function Header() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated)
  const user = useAuth((state) => state.currentUser)

  const getProfilePath = () => {
    if (!user) return "/"
    switch (user.role) {
      case "AUTHOR": return "/author-profile"
      case "ADMIN": return "/admin-profile"
      default: return "/user-profile"
    }
  }

  return (
    <nav className="bg-stone-900 px-32 py-4 flex items-center justify-between">

      {/* logo */}
      <NavLink to="/" className="text-3xl font-bold text-white tracking-tight">
        MyBlog
      </NavLink>

      <ul className="flex items-center gap-8">

        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-amber-400 text-base font-semibold"
                : "text-white/70 text-base hover:text-white transition"
            }
          >
            Home
          </NavLink>
        </li>

        {/* show register and login if not logged in */}
        {!isAuthenticated && (
          <>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-400 text-base font-semibold"
                    : "text-white/70 text-base hover:text-white transition"
                }
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-400 text-base font-semibold"
                    : "text-white/70 text-base hover:text-white transition"
                }
              >
                Login
              </NavLink>
            </li>
          </>
        )}

        {/* show profile if logged in */}
        {isAuthenticated && (
          <li>
            <NavLink
              to={getProfilePath()}
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 text-base font-semibold"
                  : "text-white/70 text-base hover:text-white transition"
              }
            >
              Profile
            </NavLink>
          </li>
        )}

      </ul>
    </nav>
  )
}

export default Header