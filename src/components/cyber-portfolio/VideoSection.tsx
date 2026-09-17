'use client'

export function VideoSection() {
  return (
    <section id="video" className="section bg-pampas">
      <video
        className="block h-auto w-full opacity-100"
        src={`${import.meta.env.BASE_URL}videos/background.mp4`}
        autoPlay
        loop
        playsInline
      />
    </section>
  )
}
