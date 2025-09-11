import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      title: "Quick Setup",
      description: "We connect Chattr to your website - no tech skills needed."
    },
    {
      number: "02",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Train Your Bot",
      description: "Send us your FAQs or let Chattr learn from your website. It gets smarter as it helps more customers."
    },
    {
      number: "03",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Watch It Work",
      description: "Your AI assistant starts conversations, answers questions, and sends you qualified leads automatically."
    }
  ]

  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Setting up Chattr is incredibly simple. Follow these three easy steps 
            and you'll have an intelligent chatbot working for your business.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="card text-center group hover:transform hover:scale-105 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-purple-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-200 to-purple-200 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-soft p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Transform Your Customer Service?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of small businesses already using artificial intelligence, through Chattr, to provide 
              better customer support and grow their business.
            </p>
            <a href="#contact" className="btn-primary inline-block">
              Start Your Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
