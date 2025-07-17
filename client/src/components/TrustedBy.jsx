// src/components/TrustedBy.jsx

export default function TrustedBy() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green-300x82.png",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://imgs.search.brave.com/2zXtB8wmmgG-QGoxa1Xl6aRkP2vSo2Ll5_Xi2Ljjo2Q/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0wvbGlua2Vk/aW4tbG9nby01RkEy/RDE3ODQyLXNlZWts/b2dvLmNvbS5wbmc",
    "https://imgs.search.brave.com/mpv1T-9iRTqUxjRVv8KK9vnLc-XY7KaEXZDCuJG4hyk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9pbnN0/ZWdyYW0tMTkyNzgw/Nzg5LmpwZw",
    "https://imgs.search.brave.com/gZq6vSWbXhGIMKN5UeEmXvj5aNmPxZ49MWqD63bhogA/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2l4c3RhdGlj/LmNvbS9tZWRpYS8w/MDI3MDdfZDhiMGUx/NjE3YzY4NGQ1ODky/ZDlkOGI1MDM2Zjg2/OTB-bXYyLnBuZy92/MS9jcm9wL3hfMCx5/XzAsd180NDQsaF8x/ODAvZmlsbC93XzIy/MixoXzg4LGFsX2Ms/cV84NSx1c21fMC42/Nl8xLjAwXzAuMDEs/ZW5jX2F2aWYscXVh/bGl0eV9hdXRvL3pv/b20tcGFkZGluZy1y/aWdodC5wbmc",
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
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
