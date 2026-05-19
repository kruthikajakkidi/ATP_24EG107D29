import {
  errorClass,
  mutedText,
} from "../styles/common"

import { useForm } from "react-hook-form"
import { NavLink, useNavigate } from "react-router"
import { useState } from "react"
import { toast } from "react-hot-toast"
import api from "../services/api"

function Register() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState(null)
  const [preview, setPreview] = useState(null)

  const navigate = useNavigate()




  const onUserRegister = async (userObj) => {

    const formData = new FormData()

    formData.append("role", userObj.role)
    formData.append("firstName", userObj.firstName)
    formData.append("lastName", userObj.lastName)
    formData.append("email", userObj.email)
    formData.append("password", userObj.password)

    if (userObj.profileImageUrl?.[0]) {
      formData.append("profileImageUrl", userObj.profileImageUrl[0])
    }

    try {

      setLoading(true)
      setApiError(null)

      const res = await api.post("/auth/users", formData)

      if (res.status === 201) {

        toast.success("Account created successfully!")
        navigate("/login")

      }

    } catch (err) {

      setApiError(
        err.response?.data?.message || "Registration failed"
      )

    } finally {

      setLoading(false)

    }

  }




  return (

    <div className="min-h-screen bg-[#111111] flex items-center justify-center px-4 py-16">

      <div className="w-full max-w-2xl bg-[#1A1A1A] border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl">

        {/* heading */}
        <div className="text-center mb-10">

          <p className="text-[#D6B58A] uppercase tracking-[0.3em] text-xs mb-4">
            welcome to myblog
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Create Account
          </h2>

          <p className="text-white/50 text-lg">
            Start reading and publishing articles with our blogging platform.
          </p>

        </div>



        {/* api error */}
        {apiError && (

          <p className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-2xl px-4 py-3 mb-6">
            {apiError}
          </p>

        )}



        <form onSubmit={handleSubmit(onUserRegister)}>

          {/* role */}
          <div className="mb-7">

            <label className="text-sm text-white/70 block mb-3">
              Register As
            </label>

            <div className="flex gap-4">

              <label className="flex-1 flex items-center justify-center gap-3 bg-[#222222] border border-white/10 rounded-2xl py-4 cursor-pointer hover:bg-[#2A2A2A] transition">

                <input
                  type="radio"
                  value="USER"
                  {...register("role", {
                    required: "Please select a role",
                  })}
                  className="accent-yellow-400"
                />

                <span className="text-white font-medium">
                  User
                </span>

              </label>



              <label className="flex-1 flex items-center justify-center gap-3 bg-[#222222] border border-white/10 rounded-2xl py-4 cursor-pointer hover:bg-[#2A2A2A] transition">

                <input
                  type="radio"
                  value="AUTHOR"
                  {...register("role", {
                    required: "Please select a role",
                  })}
                  className="accent-yellow-400"
                />

                <span className="text-white font-medium">
                  Author
                </span>

              </label>

            </div>


            {errors.role && (
              <p className={errorClass}>
                {errors.role.message}
              </p>
            )}

          </div>





          {/* names */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">

            <div>

              <label className="text-sm text-white/70 block mb-2">
                First Name
              </label>

              <input
                type="text"
                placeholder="First name"
                className="w-full bg-[#222222] border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-gray-500 focus:border-[#FACC15] transition"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />

              {errors.firstName && (
                <p className={errorClass}>
                  {errors.firstName.message}
                </p>
              )}

            </div>



            <div>

              <label className="text-sm text-white/70 block mb-2">
                Last Name
              </label>

              <input
                type="text"
                placeholder="Last name"
                className="w-full bg-[#222222] border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-gray-500 focus:border-[#FACC15] transition"
                {...register("lastName")}
              />

            </div>

          </div>






          {/* email */}
          <div className="mb-5">

            <label className="text-sm text-white/70 block mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-[#222222] border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-gray-500 focus:border-[#FACC15] transition"
              {...register("email", {
                required: "Email is required",
              })}
            />

            {errors.email && (
              <p className={errorClass}>
                {errors.email.message}
              </p>
            )}

          </div>






          {/* password */}
          <div className="mb-5">

            <label className="text-sm text-white/70 block mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Minimum 8 characters"
              className="w-full bg-[#222222] border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-gray-500 focus:border-[#FACC15] transition"
              {...register("password", {
                required: "Password is required",
              })}
            />

            {errors.password && (
              <p className={errorClass}>
                {errors.password.message}
              </p>
            )}

          </div>







          {/* image upload */}
          <div className="mb-8">

            <label className="text-sm text-white/70 block mb-2">
              Profile Image
            </label>

            <input
              type="file"
              accept="image/png, image/jpeg"
              className="w-full bg-[#222222] border border-white/10 rounded-2xl px-5 py-4 text-white file:border-0 file:bg-[#FACC15] file:px-4 file:py-2 file:rounded-xl file:text-black file:font-medium"
              {...register("profileImageUrl")}
              onChange={(e) => {

                const file = e.target.files[0]

                if (file) {
                  setPreview(URL.createObjectURL(file))
                }

              }}
            />



            {preview && (

              <div className="flex justify-center mt-6">

                <img
                  src={preview}
                  alt=""
                  className="w-28 h-28 rounded-full object-cover border-4 border-[#FACC15] shadow-xl"
                />

              </div>

            )}

          </div>







          {/* submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FACC15] hover:bg-yellow-300 text-black font-semibold py-4 rounded-2xl transition duration-300"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

        </form>





        {/* login */}
        <p className={`${mutedText} text-center mt-8 text-white/50`}>

          Already have an account?{" "}

          <NavLink
            to="/login"
            className="text-[#FACC15] hover:text-yellow-300 font-medium"
          >
            Sign In
          </NavLink>

        </p>

      </div>

    </div>

  )

}

export default Register