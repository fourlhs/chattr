import React, { useState } from 'react'

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)

  const pricing = {
    basic: { monthly: 149, yearly: 1550, setup: 250, saveLabel: 'Save ~15% per year' },
    pro: { monthly: 199, yearly: 2000, setup: 350, saveLabel: 'Save ~20% per year' },
    premium: { monthly: 399, yearly: 4000, setup: 500, saveLabel: 'Save ~20% per year' },
  }

  const formatCurrency = (value) => `€${value}`
{/*
  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
 {/*       <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Affordable, No Surprises
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One plan that grows with your business. No hidden fees, 
            no complicated tiers. Just powerful AI customer service.
          </p>
        </div>

        {/* Billing Toggle */}
{/*        <div className="flex justify-center mb-10">
          <div className="relative bg-white shadow-soft border border-gray-200 rounded-full p-1 w-[280px] select-none" role="tablist" aria-label="Billing interval">
            <div
              className={`absolute top-1 bottom-1 w-[138px] rounded-full bg-gradient-to-r from-primary-500 to-purple-500 transition-transform duration-300 ${isYearly ? 'translate-x-[140px]' : 'translate-x-0'}`}
            />
            <button
              type="button"
              role="tab"
              aria-selected={!isYearly}
              onClick={() => setIsYearly(false)}
              className={`relative z-10 w-[50%] text-sm font-semibold py-2 rounded-full transition-colors ${!isYearly ? 'text-white' : 'text-gray-600 hover:text-gray-800'}`}
            >
              Monthly
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={isYearly}
              onClick={() => setIsYearly(true)}
              className={`relative z-10 w-[50%] text-sm font-semibold py-2 rounded-full transition-colors ${isYearly ? 'text-white' : 'text-gray-600 hover:text-gray-800'}`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
{/*        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {/* Basic */}
{/*            <div className="card flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Basic</h3>
                <p className="text-gray-600 mt-1">Web-only chatbot</p>
              </div>
              <div className="space-y-2 mb-1">
                <div className="text-3xl font-bold text-gray-900">
                  {formatCurrency(pricing.basic.setup)} <span className="text-base font-semibold text-gray-500">setup</span>
                </div>
                <div className="text-xl text-gray-700">
                  {isYearly ? (
                    <>
                      {formatCurrency(pricing.basic.yearly)}<span className="text-gray-500">/year</span>
                    </>
                  ) : (
                    <>
                      {formatCurrency(pricing.basic.monthly)}<span className="text-gray-500">/month</span>
                    </>
                  )}
                </div>
                {isYearly && (
                  <div className="text-sm font-medium text-green-600">{pricing.basic.saveLabel}</div>
                )}
              </div>
              <ul className="space-y-3 text-gray-700 mb-6 mt-4">
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span><span>Web-only chatbot</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span><span>1 change per month</span></li>
              </ul>
              <a href="#contact" className="btn-secondary mt-auto text-center">Choose Basic</a>
            </div>

            {/* Pro - Highlighted */}
{/*            <div className="relative card flex flex-col border-2 border-primary-500 shadow-medium scale-105">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-primary-500 to-purple-500 rounded-full shadow">Most Popular</span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
                <p className="text-gray-600 mt-1">Web + Instagram integration</p>
              </div>
              <div className="space-y-2 mb-1">
                <div className="text-3xl font-bold text-gray-900">
                  {formatCurrency(pricing.pro.setup)} <span className="text-base font-semibold text-gray-500">setup</span>
                </div>
                <div className="text-xl text-gray-700">
                  {isYearly ? (
                    <>
                      {formatCurrency(pricing.pro.yearly)}<span className="text-gray-500">/year</span>
                    </>
                  ) : (
                    <>
                      {formatCurrency(pricing.pro.monthly)}<span className="text-gray-500">/month</span>
                    </>
                  )}
                </div>
                {isYearly && (
                  <div className="text-sm font-medium text-green-600">{pricing.pro.saveLabel}</div>
                )}
              </div>
              <ul className="space-y-3 text-gray-700 mb-6 mt-4">
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span><span>Web + Instagram integration</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span><span>4 changes per month</span></li>
              </ul>
              <a href="#contact" className="btn-primary mt-auto text-center">Choose Pro</a>
            </div>

            {/* Premium */}
{/*            <div className="card flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Premium</h3>
                <p className="text-gray-600 mt-1">Advanced automation + booking</p>
              </div>
              <div className="space-y-2 mb-1">
                <div className="text-3xl font-bold text-gray-900">
                  {formatCurrency(pricing.premium.setup)} <span className="text-base font-semibold text-gray-500">setup</span>
                </div>
                <div className="text-xl text-gray-700">
                  {isYearly ? (
                    <>
                      {formatCurrency(pricing.premium.yearly)}<span className="text-gray-500">/year</span>
                    </>
                  ) : (
                    <>
                      {formatCurrency(pricing.premium.monthly)}<span className="text-gray-500">/month</span>
                    </>
                  )}
                </div>
                {isYearly && (
                  <div className="text-sm font-medium text-green-600">{pricing.premium.saveLabel}</div>
                )}
              </div>
              <ul className="space-y-3 text-gray-700 mb-6 mt-4">
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span><span>All Pro features</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span><span>Booking system (Google Sheets + Gmail notifications)</span></li>
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span><span>Up to 8 changes per month</span></li>
              </ul>
              <a href="#contact" className="btn-secondary mt-auto text-center">Choose Premium</a>
            </div>

            {/* Enterprise */}
{/*            <div className="card flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
                <p className="text-gray-600 mt-1">Custom chatbot</p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="text-3xl font-bold text-gray-900">Custom</div>
              </div>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center space-x-2"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span><span>Custom AI solutions</span></li>
              </ul>
              <a href="#contact" className="btn-primary mt-auto text-center">Talk with Sales</a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
{/*        <div className="text-center mt-16">
          <p className="text-gray-500 mb-8">All plans include unlimited customization and easy cancellation anytime.</p>
          <div className="flex flex-wrap justify-center items-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
*/}
}
export default Pricing
