// src/components/TutorialVideo.jsx

export default function TutorialVideo() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          👀 See LeadBridge in Action
        </h2>
        <p className="text-gray-600 mb-10">
          Watch how LeadBridge simplifies lead tracking, task automation, and sales growth.
        </p>
        <div className="flex justify-center">
          <video
            autoPlay
            muted
            loop
            playsInline
          
            src="https://www.zohowebstatic.com/sites/zweb/images/crm/zia-module-creation.mp4"
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
