// src/components/HeroSection.jsx
import { Link } from "react-router-dom"


export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-100 to-purple-200 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left content */}
        <div className="text-center md:text-left flex-1">
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
        </div>

        {/* Right image */}
        <div className="flex-1">
          <img
            src="https://i.pinimg.com/1200x/b3/25/f2/b325f2363b4a4d8ee987016352772776.jpg"
            alt="CRM dashboard"
            className="w-full max-w-md rounded-xl mx-auto drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
