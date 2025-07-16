// src/components/Testimonials.jsx
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Aman Jha",
    feedback:
      "LeadBridge transformed how we manage leads. Clean UI, fast tracking, and it just works!",
    image: "https://ui-avatars.com/api/?name=Aman+Jha&background=0D8ABC&color=fff",
  },
  {
    name: "Sneha Patel",
    feedback:
      "As a startup founder, LeadBridge helped my team stay organized and close more deals!",
    image: "https://ui-avatars.com/api/?name=Sneha+Patel&background=8E44AD&color=fff",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          💬 What Our Users Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-left hover:shadow-xl transition-all"
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <p className="font-semibold text-gray-800">{t.name}</p>
              </div>
              <p className="text-gray-600 italic">“{t.feedback}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
