import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center"
      >
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 animate-pulse">
            LeadBridge
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-700 mb-8"
        >
          🚀 Simplify your sales process, manage leads smartly, and close more deals — all in one place.
        </motion.p>
<Link
to={"/dashboard"}
>

        <motion.a
         
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transition-all"
        >
          Go to Dashboard →
        </motion.a>
        </Link>
      </motion.div>
    </div>
  );
}
