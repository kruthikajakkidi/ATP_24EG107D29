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
  } = useForm();

  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      let res = await api.post("/emp-api/employees", newEmpObj);
      if (res.status === 201) {
        navigate("/list");
      }
    } catch (err) {
      setError(err.response?.data?.reason || err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div>
      <h1 className="text-5xl text-center text-blue-800">Create New Employee</h1>
      <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
        <input
          type="text"
          placeholder="Enter name"
          {...register("name")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter Email"
          {...register("email")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
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
          {...register("designation")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyName")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <button type="submit" className="text-2xl rounded-2xl bg-blue-900 text-white block mx-auto p-4">
          Add Emp
        </button>
      </form>
    </div>
  );
}

export default CreateEmp;