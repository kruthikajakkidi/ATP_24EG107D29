
import { NavLink } from "react-router";
import CreateEmp from "./CreateEmp";

function Home() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-yellow-50 px-6">
      
      <div className="relative w-full max-w-4xl text-center bg-white/80 backdrop-blur-md p-14 rounded-3xl shadow-2xl border border-yellow-100">
        
        {/* Decorative glow */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-300/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-400/20 blur-3xl rounded-full"></div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          Employee <span className="text-yellow-500">Management</span> System
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          A full-stack application to efficiently manage, track, and organize employee details in one place.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          
          <NavLink
            to="create-emp"
            className="px-8 py-4 text-lg font-semibold bg-yellow-500 text-white rounded-xl shadow-lg hover:bg-yellow-600 hover:scale-105 transition-all duration-300"
          >
            Get Started
          </NavLink>

          <NavLink
            to="/employees"
            className="px-8 py-4 text-lg font-semibold bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300"
          >
            View Employees
          </NavLink>

        </div>
      </div>
    </div>
  );
}

export default Home;