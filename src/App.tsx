import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <div className="min-h-screen text-white relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <div className="bg-purple-900 py-16">
          <Countdown targetDate={new Date('2025-02-04T00:00:00')} />
        </div>
        <About />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App