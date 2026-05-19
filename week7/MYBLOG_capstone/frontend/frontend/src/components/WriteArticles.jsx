import { useForm } from "react-hook-form"
import { useState } from "react"
import api from "../services/api"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router"
import { useAuth } from "../store/AuthStore"

function WriteArticles() {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const currentUser = useAuth((state) => state.currentUser)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()



  const submitArticle = async (articleObj) => {

    articleObj.author =
      (currentUser._id ?? currentUser.id)?.toString()

    try {

      setLoading(true)

      let res = await api.post(
        "/author-api/article",
        articleObj
      )

      if (res.status === 201) {

        toast.success("Article published successfully")

        reset()

        navigate("../articles")

      }

    } catch (err) {

      toast.error(
        err.response?.data?.message ||
        "Failed to publish article"
      )

    } finally {

      setLoading(false)

    }

  }



  return (

    <div className="min-h-screen bg-[#111111] flex justify-center px-4 py-10">

      <div className="w-full max-w-4xl bg-[#1A1A1A] border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl">

        {/* heading */}
        <div className="text-center mb-10">

          <p className="text-[#D6B58A] uppercase tracking-[0.3em] text-xs mb-4">
            myblog editor
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white  mb-4">
            Write New Article
          </h2>

          <p className="text-white/50 text-lg">
            Share your ideas, stories, and knowledge with readers.
          </p>

        </div>





        {/* form */}
        <form onSubmit={handleSubmit(submitArticle)}>

          {/* title */}
          <div className="mb-6">

            <label className="text-sm text-white/70 block mb-2">
              Article Title
            </label>

            <input
              type="text"
              placeholder="Enter article title"
              className="w-full bg-[#222222] border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-gray-500 focus:border-[#FACC15] transition"
              {...register("title", {
                required: "Title is required",
                minLength: {
                  value: 5,
                  message: "Title must be at least 5 characters",
                },
              })}
            />

            {errors.title && (
              <p className="text-red-400 text-sm mt-2">
                {errors.title.message}
              </p>
            )}

          </div>






          {/* category */}
          <div className="mb-6">

            <label className="text-sm text-white/70 block mb-2">
              Category
            </label>

            <input
              type="text"
              placeholder="Technology, Lifestyle, AI..."
              className="w-full bg-[#222222] border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-gray-500 focus:border-[#FACC15] transition"
              {...register("category", {
                required: "Category is required",
              })}
            />

            {errors.category && (
              <p className="text-red-400 text-sm mt-2">
                {errors.category.message}
              </p>
            )}

          </div>







          {/* content */}
          <div className="mb-8">

            <label className="text-sm text-white/70 block mb-2">
              Article Content
            </label>

            <textarea
              rows="10"
              placeholder="Write your article content here..."
              className="w-full bg-[#222222] border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-gray-500 focus:border-[#FACC15] transition resize-none"
              {...register("content", {
                required: "Content is required",
                minLength: {
                  value: 50,
                  message: "Content must be at least 50 characters",
                },
              })}
            />

            {errors.content && (
              <p className="text-red-400 text-sm mt-2">
                {errors.content.message}
              </p>
            )}

          </div>


          {/* submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FACC15] hover:bg-yellow-300 text-black font-semibold py-4 rounded-2xl transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >

            {loading ? "Publishing..." : "Publish Article"}

          </button>

        </form>

      </div>

    </div>

  )

}

export default WriteArticles