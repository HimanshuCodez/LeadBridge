
export default function Chart() {
  return (
    <section className="bg-gradient-to-br from-blue-400 to-purple-700-300 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image with stat overlay */}
        <div className="relative max-w-md">
          <img
            src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/05/promo-crm-beginners-guide.webp?resize=1024,1024"
            alt="Graph"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right: Text content */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Visualize Your Code Coverage<br />
            Progress with Graphs
          </h2>
          <p className="text-gray-600 text-lg">
            Code Coverage reporting graphs make it easy to monitor your progress
            across all branches. With clean visuals and real-time updates, you can
            motivate your team to increase code coverage and achieve a healthier codebase.
          </p>
        </div>
      </div>
    </section>
  )
}
