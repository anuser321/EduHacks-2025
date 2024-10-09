import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">EduHacks 2025</h1>
        <p className="text-xl md:text-2xl mb-8">Where Space Meets Education</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdXlfLpy2-KS1Y7Q3jm_wSDLiDekK33N3eWTFtHmeP_us7HJA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors"
        >
          Join the Mission
        </a>
      </div>
    </div>
  )
}

export default Hero