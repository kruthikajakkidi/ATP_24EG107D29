import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import api from "../../services/api";

function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await api.post("/emp-api/employees", data);
      if (res.status === 201) {
        navigate("/list");
      }
    } catch (err) {
      setError(err.response?.data?.reason || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-yellow-50 px-6">

      {/* CARD */}
      <div className="w-full max-w-2xl bg-white/70 backdrop-blur-md shadow-2xl border border-yellow-100 rounded-3xl p-10
        hover:shadow-yellow-200 transition-all duration-300">

        {/* TITLE */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Create{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Employee
          </span>
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Add new employee details to the system
        </p>

        {/* ERROR */}
        {error && (
          <div className="mb-6 p-3 rounded-xl bg-red-100 text-red-600 text-center">
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: "Name is required" })}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <input
            type="email"
            placeholder="Email Address"
            {...register("email", { required: "Email is required" })}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="number"
            placeholder="Mobile Number"
            {...register("mobile")}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
          />

          <input
            type="text"
            placeholder="Designation"
            {...register("designation", {
              required: "Designation is required",
            })}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
          />
          {errors.designation && (
            <p className="text-red-500 text-sm">{errors.designation.message}</p>
          )}

          <input
            type="text"
            placeholder="Company Name"
            {...register("companyName", {
              required: "Company name is required",
            })}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm">
              {errors.companyName.message}
            </p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-white font-semibold text-lg
              bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500
              hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            {loading ? "Creating Employee..." : "Create Employee"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEmp;