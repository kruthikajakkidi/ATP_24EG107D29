import { NavLink } from "react-router";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-yellow-50 flex flex-col">

      {/* HERO */}
      <div className="flex flex-1 items-center justify-center px-6 py-12">

        <div className="relative w-full max-w-5xl text-center bg-white/70 backdrop-blur-md p-14 rounded-3xl shadow-2xl border border-yellow-100">

          {/* Glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-300/20 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-400/20 blur-3xl rounded-full"></div>

          {/* TITLE */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Employee
            </span>{" "}
            Management System
          </h1>

          {/* SUBTITLE */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A full-stack application to efficiently manage, track, and organize employee details in one place.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            {/* PRIMARY */}
            <NavLink
              to="create-emp"
              className="px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-lg
              bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500
              hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Create Employee
            </NavLink>

            {/* SECONDARY */}
            <NavLink
              to="/list"
               className="px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-lg
              bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500
              hover:scale-105 active:scale-95 transition-all duration-300"
            >
              View Employees
            </NavLink>

          </div>
        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-yellow-200 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Employee Tracking</h3>
            <p className="text-gray-600">
              Easily store, view, and manage all employee records in a single system.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-yellow-200 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Simple Management</h3>
            <p className="text-gray-600">
              Add, update, and delete employee details with a clean interface.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-yellow-200 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Fast & Reliable</h3>
            <p className="text-gray-600">
              Built for performance, scalability, and smooth user experience.
            </p>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()} Employee Management System. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-500">
            <a href="#" className="hover:text-yellow-500 transition">Privacy</a>
            <a href="#" className="hover:text-yellow-500 transition">Terms</a>
            <a href="#" className="hover:text-yellow-500 transition">Support</a>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default Home;