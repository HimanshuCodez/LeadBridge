// src/components/ProgressWithGraph.jsx
export default function Chart() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image with stat overlay */}
        <div className="relative max-w-md">
          <img
            src="https://i.pinimg.com/736x/f1/97/c6/f197c658437e2e2c60fe473f2a120d1c.jpg"
            alt="Graph"
            className="rounded-2xl shadow-lg"
          />

          {/* Floating stat box */}
          <div className="absolute top-6 left-6 bg-white rounded-xl shadow-md p-4 w-56">
            <div className="flex items-center justify-between">
              <p className="font-bold text-gray-900 text-lg">74.11%</p>
              <p className="text-green-600 text-sm font-medium">+4.64%</p>
            </div>
            <p className="text-sm text-gray-700 mt-1">
              #123 Add new feature for import & export of user data
            </p>
            <p className="text-xs text-gray-500 mt-1">by Lasse Rafn · 5 days ago</p>
          </div>
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
