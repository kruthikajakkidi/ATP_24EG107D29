import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import api from "../../services/api";

function EditEmployee() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (!state) {
      navigate("/list");
      return;
    }

    setValue("name", state.name);
    setValue("email", state.email);
    setValue("mobile", state.mobile);
    setValue("designation", state.designation);
    setValue("companyName", state.companyName);
  }, [state, navigate, setValue]);

  const saveModified = async (modifiedEmp) => {
    try {
      setLoading(true);
      const res = await api.put(
        `/emp-api/employees/${state._id}`,
        modifiedEmp
      );

      if (res.status === 200) {
        navigate("/list");
      }
    } catch (err) {
      setError(err.response?.data?.reason || err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!state) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-yellow-50 px-6">

      {/* CARD */}
      <div className="w-full max-w-2xl bg-white/70 backdrop-blur-md border border-yellow-100 shadow-2xl rounded-3xl p-10
        hover:shadow-yellow-200 transition-all duration-300">

        {/* TITLE */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Edit{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Employee
          </span>
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Update employee details and save changes
        </p>

        {/* ERROR */}
        {error && (
          <div className="mb-6 p-3 bg-red-100 text-red-600 text-center rounded-xl">
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit(saveModified)} className="space-y-5">

          {/* NAME */}
          <input
            type="text"
            placeholder="Enter name"
            {...register("name", { required: true })}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
          />

          {/* EMAIL (disabled) */}
          <input
            type="email"
            {...register("email")}
            disabled
            className="w-full p-3 border rounded-xl bg-gray-100 text-gray-500 cursor-not-allowed"
          />

          {/* MOBILE */}
          <input
            type="number"
            placeholder="Enter mobile number"
            {...register("mobile")}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
          />

          {/* DESIGNATION */}
          <input
            type="text"
            placeholder="Enter designation"
            {...register("designation", { required: true })}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
          />

          {/* COMPANY */}
          <input
            type="text"
            placeholder="Enter company name"
            {...register("companyName", { required: true })}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-white font-semibold text-lg
              bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500
              hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            {loading ? "Saving Changes..." : "Save Changes"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default EditEmployee;