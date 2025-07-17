import React from 'react';
import { motion } from 'framer-motion';

export function FeaturesGrid() {
  const features = [
    {
      title: "Smart Lead Capture",
      desc: "Capture leads from websites, emails, and forms automatically.",
      image: "https://cdn-icons-png.flaticon.com/512/4341/4341025.png",
      gradient: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-50"
    },
    {
      title: "Pipeline View",
      desc: "Visualize your deals in an easy drag-and-drop pipeline.",
      image: "https://cdn-icons-png.flaticon.com/512/2693/2693507.png",
      gradient: "from-purple-500 to-pink-400",
      bgColor: "bg-purple-50"
    },
    {
      title: "Task Management",
      desc: "Stay on top of follow-ups with reminders and notes.",
      image: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
      gradient: "from-green-500 to-emerald-400",
      bgColor: "bg-green-50"
    },
    {
      title: "Analytics & Insights",
      desc: "Know your numbers. Conversion rates, top performers & more.",
      image: "https://cdn-icons-png.flaticon.com/512/4149/4149707.png",
      gradient: "from-orange-500 to-red-400",
      bgColor: "bg-orange-50"
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            ⚡ Powerful Features
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Features That
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Fuel Growth
            </span>
          </h2>
          
          <p className="text-gray-600 text-xl mb-16 max-w-3xl mx-auto">
            Everything you need to manage, track, and convert leads efficiently.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className={`group relative p-8 ${feature.bgColor} rounded-3xl border border-white/50 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`} />
              
              {/* Icon container with gradient border */}
              <div className={`relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5`}>
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-10 w-10 group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                {feature.desc}
              </p>

              {/* Decorative elements */}
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${feature.gradient} opacity-60`} />
              <div className={`absolute bottom-4 left-4 w-1 h-1 rounded-full bg-gradient-to-br ${feature.gradient} opacity-40`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}