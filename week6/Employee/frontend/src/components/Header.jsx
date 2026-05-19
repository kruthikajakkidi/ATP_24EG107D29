import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4
      bg-blue-950/90 backdrop-blur-md text-white shadow-lg">

      {/* BRAND */}
      <div className="text-xl font-bold tracking-wide">
        <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          Employee Hub
        </span>
      </div>

      {/* LINKS */}
      <div className="flex gap-8 text-lg font-medium">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
              : "hover:text-yellow-300 transition"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/create-emp"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
              : "hover:text-yellow-300 transition"
          }
        >
          Create
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
              : "hover:text-yellow-300 transition"
          }
        >
          Employees List
        </NavLink>

      </div>
    </nav>
  );
}

export default Header;