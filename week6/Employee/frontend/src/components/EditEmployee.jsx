import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from 'axios'


function EditEmployee() {
 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
   

 const gotoEmployee=(empObj)=>{
  navigate("/employee",{state:empObj})
 }
 const gotoEditEmployee=(empObj)=>{
  navigate("/edit-emp",{state:empObj})
 }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const {state}=useLocation()
  useEffect(()=>{
    setValue("name",state.name)
      setValue("email",state.email)
        setValue("mobile",state.mobile)
          setValue("designation",state.designation)
            setValue("companyName",state.companyName)
    

  },[])
  const saveModified=async(modifedEmp)=>{
    console.log(modifedEmp)
    //put
    const res=await axios.put(`http://localhost:4000/emp-api/employees/${state._id}`,modifedEmp)
    if (res.status===200){
      //nav 
      navigate("/list")
    }

  }

  return (
    <div>
      <h1 className="text-5xl text-center text-blue-800">Edit Employee</h1>
      {/* form */}
      <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(saveModified)}>
        <input
          type="text"
          placeholder="Enter name "
          {...register("name")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter Email "
          {...register("email")}
          className="mb-3  border-2 p-3 w-full rounded-2xl bg-gray-300"
          disabled
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyName")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />

        <button type="submit" className="text-2xl rounded-2xl bg-blue-900 text-white block mx-auto p-4">
          Edit Emp
        </button>
      </form>
    </div>
  );
}



export default EditEmployee