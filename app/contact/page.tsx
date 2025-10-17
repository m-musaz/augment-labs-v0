"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    budgetRange: "$10k-$25k",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({
        fullName: "",
        workEmail: "",
        companyName: "",
        budgetRange: "$10k-$25k",
        message: "",
      })
      alert("Thank you for your message! We will be in touch soon.")
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 font-sans">Let's Build Together</h1>
            <p className="text-lg text-gray-400 font-sans">
              Tell us about your project, and we'll be in touch to schedule a discovery call.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-sans">Get in Touch</h2>
                <p className="text-gray-400 mb-8 font-sans">
                  We respond within one business day. Share a few details and we'll plan a discovery call to explore
                  scope, timelines, and fit.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:musa@augment-labs.com"
                  className="text-gray-300 hover:text-primary transition font-sans"
                >
                  musa@augment-labs.com
                </a>
              </div>

              <div className="border-t border-[#2a3f5f] pt-8">
                <p className="text-gray-400 text-sm font-sans">
                  Prefer a quick call? Mention your availability and we'll propose times.
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="border border-[#2a3f5f] rounded-xl p-8 bg-[#0f1b28]">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-white font-semibold mb-2 font-sans">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Alex Chen"
                    required
                    className="w-full bg-[#1a2f42] border border-[#2a3f5f] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition font-sans"
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label className="block text-white font-semibold mb-2 font-sans">Work Email</label>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    className="w-full bg-[#1a2f42] border border-[#2a3f5f] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition font-sans"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-white font-semibold mb-2 font-sans">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Northwind Labs"
                    required
                    className="w-full bg-[#1a2f42] border border-[#2a3f5f] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition font-sans"
                  />
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-white font-semibold mb-2 font-sans">Budget Range</label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full bg-[#1a2f42] border border-[#2a3f5f] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition font-sans"
                  >
                    <option>$10k-$25k</option>
                    <option>$25k-$50k</option>
                    <option>$50k-$100k</option>
                    <option>$100k+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white font-semibold mb-2 font-sans">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Give us a sense of goals, constraints, and timelines."
                    required
                    rows={6}
                    className="w-full bg-[#1a2f42] border border-[#2a3f5f] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition resize-none font-sans"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-[#4a8bc4] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 disabled:opacity-50 font-sans"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
