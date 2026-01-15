'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    reason: 'Support and Billing',
    username: '',
    email: '',
    details: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({
          reason: 'Support and Billing',
          username: '',
          email: '',
          details: ''
        })
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="relative pt-48 pb-16 md:pb-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b0f17] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[38%_1fr] lg:grid-cols-[38%_1fr] gap-0">
          {/* Left Side - Image */}
          <div className="relative order-2 md:order-1 max-h-[500px] md:max-h-none">
            <div className="relative h-full min-h-[350px] md:min-h-[600px]">
              <Image
                src="/images/form-img-724x1024.jpg"
                alt="Contact"
                fill
                className="object-cover rounded-bl-[18px] md:rounded-tl-[18px] md:rounded-bl-[18px] md:rounded-br-0 rounded-br-[18px]"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-[#171717] p-8 md:p-12 lg:p-16 rounded-tr-[18px] rounded-br-[18px] md:rounded-tl-0 md:rounded-bl-0 rounded-tl-[18px] order-1 md:order-2">
            <div className="max-w-[630px] mx-auto">
              <h1 className="text-gradient text-4xl md:text-5xl font-semibold mb-8">
                Need to contact us?
              </h1>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Reason for Contact */}
                <div className="space-y-3">
                  <label htmlFor="reason" className="block text-white text-base font-medium">
                    Reason For Contact *
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-[#111111] border border-[#282c42] rounded-lg text-white font-medium text-base focus:border-[#6a6afb] focus:outline-none transition"
                    required
                  >
                    <option value="Support and Billing">Support and Billing</option>
                    <option value="Technical Issue">Technical Issue</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Press Inquiry">Press Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Username */}
                <div className="space-y-3">
                  <label htmlFor="username" className="block text-white text-base font-medium">
                    Your Index 101 username *
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-[#111111] border border-[#282c42] rounded-lg text-white font-medium text-base placeholder:text-[#9094a6] placeholder:font-medium focus:border-[#6a6afb] focus:outline-none transition"
                    placeholder="Enter your username"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-white text-base font-medium">
                    Email address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-[#111111] border border-[#282c42] rounded-lg text-white font-medium text-base placeholder:text-[#9094a6] placeholder:font-medium focus:border-[#6a6afb] focus:outline-none transition"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <label htmlFor="details" className="block text-white text-base font-medium">
                    Details *
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={8}
                    className="w-full px-4 py-3.5 bg-[#111111] border border-[#282c42] rounded-lg text-white font-medium text-base placeholder:text-[#9094a6] placeholder:font-medium focus:border-[#6a6afb] focus:outline-none transition resize-none"
                    placeholder="Details, error messages or any other useful informations"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-[#202125] text-white text-lg font-medium rounded-lg hover:bg-[#2a2a2f] transition-all"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
