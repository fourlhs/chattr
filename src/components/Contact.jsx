import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-soft p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We’re here to help! Reach out and start your chatbot journey today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-primary-500 to-teal-500 flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <div className="space-y-1">
                <a href="tel:6941514642" className="text-primary-600 hover:text-primary-700 font-medium">+30 694 151 4642</a>
                <div></div>
                <a href="tel:6989744363" className="text-primary-600 hover:text-primary-700 font-medium">+30 698 974 4363</a>
              </div>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-primary-500 to-teal-500 flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:chattrinfo@gmail.com" className="text-primary-600 hover:text-primary-700 font-medium">chattrinfo@gmail.com</a>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-primary-500 to-teal-500 flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7H7v10h10V7h-4z"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Actions</h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:00306941514642" className="btn-secondary">Call Now</a>
                <a href="mailto:chattrinfo@gmail.com" className="btn-primary">Email Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
