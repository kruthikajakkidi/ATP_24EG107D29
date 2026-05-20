import { NavLink } from "react-router"

function Home() {

  const blogs = [
    {
      title: "Getting Started with MERN Stack",
      category: "Web Development",
      desc: "Learn how modern full-stack applications are built using MongoDB, Express, React, and Node.js.",
      image: "/card1.jpg"
    },
    {
      title: "Introduction to Artificial Intelligence",
      category: "AI & ML",
      desc: "Understand the basics of AI and Machine Learning with beginner-friendly concepts.",
      image: "/card2.jpg"
    },
    {
      title: "Building Better Coding Habits",
      category: "Productivity",
      desc: "Discover productivity techniques that improve consistency and focus.",
      image: "/card3.jpg"
    }
  ]


  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Full Stack Developer",
      review:
        "This platform helped me share my programming knowledge and connect with developers worldwide.",
      image: "https://i.pravatar.cc/100?img=1"
    },
    {
      name: "Ananya Verma",
      role: "UI/UX Designer",
      review:
        "The UI is clean, modern, and very easy to use. Writing blogs feels seamless.",
      image: "https://i.pravatar.cc/100?img=5"
    },
    {
      name: "David Miller",
      role: "Content Creator",
      review:
        "Excellent blogging platform with responsive design and smooth performance.",
      image: "https://i.pravatar.cc/100?img=8"
    }
  ]


  return (

    <div className="bg-[#111111] text-white overflow-x-hidden w-full min-h-screen">


      {/* ================= HERO SECTION ================= */}

      <section className="relative w-full h-screen overflow-hidden">

        <img
          src="/image.png"
          alt=""
          className="w-full h-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/65 flex items-center justify-center">

          <div className="text-center px-6">

            <p className="text-white/60 uppercase tracking-[0.3em] text-xs mb-5">
              welcome to myblog
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Explore Our Blog
            </h1>

            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Use our web application to read, write, and share articles with the community.
            </p>


            <div className="flex flex-wrap gap-5 justify-center">

              <NavLink
                to="/login"
                className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-stone-100 transition duration-300"
              >
               Get Started →
              </NavLink>

            </div>

          </div>

        </div>

      </section>





      {/* ================= FEATURED BLOGS ================= */}

      <section className="py-28 px-6 md:px-16">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-[#D6B58A] uppercase tracking-[0.3em] text-xs mb-4">
              featured topics
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Discover Popular Articles
            </h2>

            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Explore beginner-friendly articles, tutorials, and ideas shared by our growing community.
            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {blogs.map((blog, index) => (

              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-3 transition duration-300 shadow-2xl backdrop-blur-lg"
              >

                <img
                  src={blog.image}
                  alt=""
                  className="w-full h-64 object-cover"
                />

                <div className="p-8">

                  <p className="text-[#D6B58A] text-sm mb-3">
                    {blog.category}
                  </p>

                  <h3 className="text-2xl font-semibold mb-4">
                    {blog.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed mb-6">
                    {blog.desc}
                  </p>

                  <button className="text-[#FACC15] hover:text-yellow-300 transition">
                    Read More →
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>






      {/* ================= AUTHOR SECTION ================= */}

      <section className="py-28 px-6 md:px-16">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">


          {/* image */}
          <div className="relative">

            <img
              src="/author.jpg"
              alt=""
              className="w-full h-[650px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute inset-0 bg-black/20 rounded-[40px]" />

          </div>



          {/* content */}
          <div>

            <p className="text-[#D6B58A] uppercase tracking-[0.3em] text-xs mb-5">
              author spotlight
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Meet Our Creative Authors
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Our authors are passionate developers, creators, and writers who love sharing tutorials, experiences, and modern tech insights with the community.
            </p>



            <div className="space-y-5 mb-10">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

                <h3 className="text-xl font-semibold mb-2">
                  MERN Stack Development
                </h3>

                <p className="text-white/60">
                  Learn modern frontend and backend technologies with practical tutorials and projects.
                </p>

              </div>



              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

                <h3 className="text-xl font-semibold mb-2">
                  AI & Machine Learning
                </h3>

                <p className="text-white/60">
                  Explore beginner-friendly concepts and real-world AI applications.
                </p>

              </div>



              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

                <h3 className="text-xl font-semibold mb-2">
                  Creative Tech Community
                </h3>

                <p className="text-white/60">
                  Connect with developers, creators, and learners from around the world.
                </p>

              </div>

            </div>



            <button className="bg-[#FACC15] text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
              Explore Authors
            </button>

          </div>

        </div>

      </section>







      {/* ================= STATS SECTION ================= */}

      <section className="py-24 px-6 md:px-16 bg-white/[0.03]">

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#FACC15] mb-3">
              10K+
            </h2>

            <p className="text-white/60">
              Active Readers
            </p>

          </div>


          <div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#FACC15] mb-3">
              2K+
            </h2>

            <p className="text-white/60">
              Published Articles
            </p>

          </div>



          <div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#FACC15] mb-3">
              500+
            </h2>

            <p className="text-white/60">
              Authors
            </p>

          </div>



          <div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#FACC15] mb-3">
              50K+
            </h2>

            <p className="text-white/60">
              Monthly Views
            </p>

          </div>

        </div>

      </section>








      {/* ================= TESTIMONIALS ================= */}

      <section className="py-28 px-6 md:px-16">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-[#D6B58A] uppercase tracking-[0.3em] text-xs mb-4">
              community reviews
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Users Say
            </h2>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {reviews.map((review, index) => (

              <div
                key={index}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:-translate-y-2 transition duration-300"
              >

                <div className="flex items-center gap-4 mb-6">

                  <img
                    src={review.image}
                    alt=""
                    className="w-14 h-14 rounded-full"
                  />

                  <div>

                    <h3 className="font-semibold">
                      {review.name}
                    </h3>

                    <p className="text-white/50 text-sm">
                      {review.role}
                    </p>

                  </div>

                </div>


                <p className="text-white/60 leading-relaxed">
                  "{review.review}"
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>

  )
}

export default Home
