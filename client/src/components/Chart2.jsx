// src/components/ProgressWithGraph.jsx
export default function Chart2() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-300 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        

        {/* Right: Text content */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Just getting started on your CRM journey?<br />
            Progress with Graphs
          </h2>
          <p className="text-gray-600 text-lg">
            Learn everything you need to know about finding, winning, and keeping customers with The Beginner's Guide to CRM.
          </p>
        </div>
        {/* Left: Image with stat overlay */}
        <div className="relative max-w-md">
          <img
            src="https://odoocdn.com/openerp_website/static/src/img/apps/crm/reporting.webp"
            alt="Graph"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
