import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-100 to-purple-200 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left content */}
        <motion.div
          className="text-center md:text-left flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4">
            Supercharge Your <span className="text-blue-600">Sales</span> with LeadBridge
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Close more deals, track leads effortlessly, and grow faster with the CRM designed for simplicity and speed.
          </p>
          <Link to="/signup">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Get Started Free
            </button>
          </Link>
        </motion.div>

        {/* Right video */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            src="https://web-assets.zendesk.com/images/p-zendesk-sell-overview/hero.mp4"
            className="w-full max-w-md rounded-xl mx-auto drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}
