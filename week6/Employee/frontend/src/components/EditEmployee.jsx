import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import api from "../../services/api";

function EditEmployee() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      navigate("/list");
    }
  }, [state, navigate]);

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (!state) return;
    setValue("name", state.name);
    setValue("email", state.email);
    setValue("mobile", state.mobile);
    setValue("designation", state.designation);
    setValue("companyName", state.companyName);
  }, [state, setValue]); 

  const saveModified = async (modifiedEmp) => {
    try {
      setLoading(true);
      const res = await api.put(`/emp-api/employees/${state._id}`, modifiedEmp);
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
  if (loading) return <p className="text-center text-4xl">Loading....</p>;
  if (error) return <p className="text-red-500 text-center text-3xl">{error}</p>;

  return (
    <div>
      <h1 className="text-5xl text-center text-blue-800">Edit Employee</h1>
      <form
        className="max-w-md mx-auto mt-10"
        onSubmit={handleSubmit(saveModified)}
      >
        <input
          type="text"
          placeholder="Enter name"
          {...register("name", { required: true })}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter Email"
          {...register("email")}
          className="mb-3 border-2 p-3 w-full rounded-2xl bg-gray-300"
          disabled
        />
        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation", { required: true })}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyName", { required: true })}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <button
          type="submit"
          className="text-2xl rounded-2xl bg-blue-900 text-white block mx-auto p-4"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditEmployee;