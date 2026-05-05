

import { NavLink } from "react-router"
function Header() {
  return (
    <nav className="p-1">
        <ul className="flex justify-end gap-5 ">
          <li>
          <NavLink to="home" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>
            CreateEmp
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>
            EditEmp
          </NavLink>
        </li>
        <li>
          <NavLink to="/technologies" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>
            
          </NavLink>
        </li>
             
        </ul>
    </nav>
  )
}

export default Header