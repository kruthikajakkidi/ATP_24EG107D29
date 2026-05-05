import { NavLink } from "react-router"

function Home() {
  return (
    <div>

      {/* hero section */}
      <div className="relative w-screen h-screen overflow-hidden -mx-32">

        <img
          src="/image.png"
          alt="img not available"
          className="w-full h-full object-cover"
        />

      
        <div className="absolute inset-0 bg-stone-900/60 flex flex-col items-center justify-center text-center px-6">

          <p className="text-white/60 text-xs uppercase tracking-[0.3em] mb-4">
            welcome to myblog
          </p>

          <h1 className="text-7xl font-bold text-white mb-6 leading-tight">
            Explore Our Blog
          </h1>

          <p className="text-white/75 text-xl max-w-2xl mb-10 leading-relaxed">
            where curious minds write, ramble, and occasionally make sense —
            dive into stories, ideas, and opinions from people who have way too much to say.
          </p>

          <NavLink
            to="/login"
            className="bg-white text-stone-800 text-sm font-semibold px-10 py-3.5 rounded-full hover:bg-stone-100 transition"
          >
            Start Reading →
          </NavLink>

        </div>
      </div>

    </div>
  )
}

export default Home