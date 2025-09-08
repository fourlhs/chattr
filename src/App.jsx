import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingContactButton from './components/FloatingContactButton'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <FinalCTA />
      <Contact />
      <Footer />
      <FloatingContactButton />
    </div>
  )
}

export default App


