// ========================= AUTHORARTICLES.JSX =========================

import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useAuth } from "../store/AuthStore"
import api from "../services/api"

function AuthorArticles() {

  const navigate = useNavigate()

  const user = useAuth((state) => state.currentUser)

  const [articles, setArticles] = useState([])

  const [loading, setLoading] = useState(false)



  useEffect(() => {

    const getArticles = async () => {

      try {

        setLoading(true)

        let res = await api.get("/author-api/articles")

        setArticles(res.data.payload)

      } catch (err) {

        console.log(err)

      } finally {

        setLoading(false)

      }

    }

    if (user) getArticles()

  }, [user])



  const openArticle = (article) => {

    navigate(`/article/${article._id}`)

  }



  if (loading) {

    return (
      <div className="min-h-screen bg-[#111111] flex justify-center items-center text-white">
        Loading articles...
      </div>
    )

  }



  return (

    <div className="min-h-screen bg-[#111111] px-4 md:px-10 py-10 text-white">

      <h1 className="text-4xl font-bold mb-10">
        My Articles
      </h1>



      {articles.length === 0 ? (

        <p className="text-white/40">
          No articles yet.
        </p>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {articles.map((article) => (

            <div
              key={article._id}
              className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-6 hover:-translate-y-1 transition"
            >

              <p className="text-[#FACC15] text-sm uppercase mb-2">
                {article.category}
              </p>

              <h2 className="text-xl font-semibold mb-2">
                {article.title}
              </h2>

              <p className="text-white/50 text-sm mb-4">
                {article.content.slice(0, 80)}...
              </p>

              <button
                onClick={() => openArticle(article)}
                className="bg-[#FACC15] text-black px-5 py-2 rounded-xl font-medium"
              >
                Read
              </button>

            </div>

          ))}

        </div>

      )}

    </div>

  )

}

export default AuthorArticles