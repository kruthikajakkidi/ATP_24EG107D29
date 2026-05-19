import { useState } from "react"
import { NavLink, useNavigate } from "react-router"
import { useAuth } from "../store/AuthStore"

const Login = () => {

  const login = useAuth((state) => state.login)
  const error = useAuth((state) => state.error)

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  }



  const handleSubmit = async (e) => {

    e.preventDefault()

    setIsSubmitting(true)

    try {

      await login(formData)

      const user = useAuth.getState().currentUser

      if (user?.role === "AUTHOR") {
        navigate("/author-profile")
      }

      else if (user?.role === "ADMIN") {
        navigate("/admin-profile")
      }

      else {
        navigate("/user-profile")
      }

    } finally {

      setIsSubmitting(false)

    }

  }




  return (

    <div className="min-h-screen bg-[#111111] flex items-center justify-center px-4 py-16">

      <div className="w-full max-w-2xl bg-[#1A1A1A] border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl">

        {/* heading */}
        <div className="text-center mb-10">

          <p className="text-[#D6B58A] uppercase tracking-[0.3em] text-xs mb-4">
            welcome back
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Login to MyBlog
          </h1>

          <p className="text-white/50 text-lg">
            Continue reading and publishing articles with your account.
          </p>

        </div>




        {/* api error */}
        {error && (

          <p className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-2xl px-4 py-3 mb-6 text-center">
            {error}
          </p>

        )}





        {/* form */}
        <form onSubmit={handleSubmit}>

          {/* email */}
          <div className="mb-5">

            <label className="text-sm text-white/70 block mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#222222] border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-gray-500 focus:border-[#FACC15] transition"
            />

          </div>





          {/* password */}
          <div className="mb-7">

            <label className="text-sm text-white/70 block mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full bg-[#222222] border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-gray-500 focus:border-[#FACC15] transition"
            />

          </div>






          {/* submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#FACC15] hover:bg-yellow-300 text-black font-semibold py-4 rounded-2xl transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >

            {isSubmitting ? "Logging in..." : "Login"}

          </button>

        </form>






        {/* divider */}
        <div className="flex items-center gap-4 my-8">

          <div className="flex-1 border-t border-white/10" />

          <span className="text-white/30 text-xs uppercase tracking-widest">
            OR
          </span>

          <div className="flex-1 border-t border-white/10" />

        </div>







        {/* register link */}
        <p className="text-center text-white/50 text-sm">

          Don't have an account?{" "}

          <NavLink
            to="/register"
            className="text-[#FACC15] hover:text-yellow-300 font-medium"
          >
            Register
          </NavLink>

        </p>

      </div>

    </div>

  )

}

export default Login