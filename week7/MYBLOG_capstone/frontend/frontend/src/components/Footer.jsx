function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-6 md:px-16">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

          <div>

            <h2 className="text-3xl font-bold mb-5">
              MyBlog
            </h2>

            <p className="text-white/50 leading-relaxed">
              A modern blogging platform for developers, creators, and curious minds.
            </p>

          </div>



          <div>

            <h3 className="font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-white/50">

              <li>Home</li>
              <li>Blogs</li>
              <li>About</li>
              <li>Contact</li>

            </ul>

          </div>



          <div>

            <h3 className="font-semibold mb-5">
              Categories
            </h3>

            <ul className="space-y-3 text-white/50">

              <li>Technology</li>
              <li>AI & ML</li>
              <li>Web Development</li>
              <li>Productivity</li>

            </ul>

          </div>



          <div>

            <h3 className="font-semibold mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-white/50">

              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Help Center</li>
              <li>FAQs</li>

            </ul>

          </div>

        </div>



        <div className="border-t border-white/10 mt-14 pt-8 text-center text-white/40 text-sm">
          © 2026 MyBlog. All rights reserved.
        </div>

      </footer>
  )
}

export default Footer