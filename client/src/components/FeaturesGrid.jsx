// src/components/FeaturesGrid.jsx
import { motion } from "framer-motion"

export function FeaturesGrid() {
  const features = [
    {
      title: "Smart Lead Capture",
      desc: "Capture leads from websites, emails, and forms automatically.",
      image: "https://cdn-icons-png.flaticon.com/512/4341/4341025.png",
    },
    {
      title: "Pipeline View",
      desc: "Visualize your deals in an easy drag-and-drop pipeline.",
      image: "https://cdn-icons-png.flaticon.com/512/2693/2693507.png",
    },
    {
      title: "Task Management",
      desc: "Stay on top of follow-ups with reminders and notes.",
      image: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    },
    {
      title: "Analytics & Insights",
      desc: "Know your numbers. Conversion rates, top performers & more.",
      image: "https://cdn-icons-png.flaticon.com/512/4149/4149707.png",
    },
  ]

  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
           Features That Fuel Growth
        </h2>
        <p className="text-gray-500 text-lg mb-14 max-w-3xl mx-auto">
          Everything you need to manage, track, and convert leads efficiently.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 transition-transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <img
                src={f.image}
                alt={f.title}
                className="h-20 w-20 mx-auto mb-6"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
