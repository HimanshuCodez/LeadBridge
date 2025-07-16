export default function Testimonials() {
  const testimonials = [
    {
      name: "Aman Jha",
      feedback:
        "LeadBridge transformed how we manage leads. Clean UI, fast tracking, and it just works!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sneha Patel",
      feedback:
        "As a startup founder, LeadBridge helped my team stay organized and close more deals!",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Rahul Mehta",
      feedback:
        "Simple yet powerful. Great user experience and automation for our sales pipeline.",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      name: "Pooja Singh",
      feedback:
        "Highly recommend LeadBridge. Easy to onboard my team and saved hours every week.",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
    },
  ]

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-10">
          💬 What Our Users Say
        </h2>
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-[scroll_40s_linear_infinite]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-white w-[300px] px-6 py-6 rounded-xl shadow-md border border-gray-200 text-left hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                </div>
                <p className="text-gray-600 text-sm italic leading-relaxed">
                  “{t.feedback}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
