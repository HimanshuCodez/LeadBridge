// src/components/TrustedBy.jsx

export default function TrustedBy() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Spotify_logo_horizontal_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/LinkedIn_logo_initials.png",
    "https://upload.wikimedia.org/wikipedia/commons/2/26/Instagram_logo_2022.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/19/Zoom_Communications_Logo.svg",
  ]

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-xl font-semibold text-gray-700 mb-8">
          Trusted by leading teams & businesses
        </h3>
        <div className="overflow-hidden relative">
          <div className="flex gap-12 animate-scroll whitespace-nowrap">
            {logos.concat(logos).map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Trusted Logo"
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
