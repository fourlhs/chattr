import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const messages = [
    "Hello! How can I help you today?",
    "Do you want to see our menu?",
    "I can also help you book a table!"
  ]

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentMessage.length) {
          setDisplayText(currentMessage.slice(0, displayText.length + 1))
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          // Finished deleting, move to next message
          setIsDeleting(false)
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length)
        }
      }
    }, isDeleting ? 50 : 100) // Faster deletion, slower typing

    return () => clearTimeout(timeout)
  }, [displayText, currentMessageIndex, isDeleting, messages])
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your AI Assistant That{' '}
                <span className="bg-gradient-to-r from-primary-500 to-teal-500 bg-clip-text text-transparent">
                  Never Sleeps
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Answer customer questions instantly, boost sales, and save hours every day – 
                even when you're not around.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-lg px-10 py-4 text-center">
                Start Your Free Trial
              </a>
              <a href="#contact" className="btn-secondary text-lg px-10 py-4 text-center">
                See How It Works
              </a>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Ready to use in a week</span>
              </div>
            </div>
          </div>

          {/* Right Column - Product Mockup */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Chat Interface Mockup */}
              <div className="bg-white rounded-3xl shadow-soft p-6 max-w-md mx-auto">
                {/* Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">C</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Chattr Assistant</h3>
                    <p className="text-sm text-green-500">Online</p>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-4">
                  {/* Bot Message */}
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">C</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-md px-4 py-3 max-w-xs">
                      <p className="text-sm text-gray-700">
                        Hi! I'm your AI assistant. How can I help you today?
                      </p>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex justify-end space-x-3">
                    <div className="bg-gradient-to-r from-primary-500 to-teal-500 rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
                      <p className="text-sm text-white">
                        What services do you offer?
                      </p>
                    </div>
                  </div>

                  {/* Bot Response */}
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">C</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-md px-4 py-3 max-w-xs">
                      <p className="text-sm text-gray-700">
                        We offer web design, marketing, and consulting services. Would you like to learn more about any specific service?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="mt-6 flex space-x-3">
                  <div className="flex-1 bg-gray-50 rounded-full px-4 py-3 text-sm relative">
                    <span className="text-gray-700">
                      {displayText}
                      <span className="animate-pulse text-primary-500">|</span>
                    </span>
                  </div>
                  <button className="w-10 h-10 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-primary-100 to-teal-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-teal-100 to-primary-100 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
