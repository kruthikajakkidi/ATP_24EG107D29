import { NavLink } from "react-router";
import CreateEmp from "./CreateEmp";
function Home() {
  return (
    <div className="min-h-[80vh] flex justify-center items-center bg-gray-100 p-8">
      <div className="bg-white p-12 rounded-2xl shadow-2xl text-center w-[80%] max-w-4xl">
        
        <h1 className="text-5xl font-bold text-yellow-500 mb-6">
          Employee Management System
        </h1>

        <p className="text-xl text-gray-600 leading-9 mb-8">
         Full-Stack application to track Employee details.
        </p>

        <NavLink to="create-emp" className="px-8 py-4 text-lg bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition duration-300">
          Get Started
        </NavLink>

      </div>
    </div>
  );
}

export default Home;
