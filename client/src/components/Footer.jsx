import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 items-start">
        {/* Left: Branding */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">LeadBridge</h3>
          <p className="text-sm mb-2">Simplifying sales, one lead at a time.</p>
          <p className="text-sm mt-4 text-blue-400 font-medium">
            Founded by Himanshu Gaur
          </p>
        </div>

        {/* Center: Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">📩 Stay Updated</h4>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md text-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-md text-white text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Right: Socials + Links */}
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold text-white mb-3">🌐 Connect with Us</h4>
          <div className="flex justify-center md:justify-end gap-5 text-xl mb-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
          <div className="flex flex-col text-sm gap-1 text-gray-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-500 border-t pt-6">
        © {new Date().getFullYear()} LeadBridge. All rights reserved.
      </div>
    </footer>
  )
}
