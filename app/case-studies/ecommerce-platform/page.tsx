"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function EcommercePlatformPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/case-studies"
            className="text-primary hover:text-primary/80 mb-8 inline-flex items-center gap-2 font-sans"
          >
            ← Back to Case Studies
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full font-sans">
                Web Development
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full font-sans">
                E-Commerce
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full font-sans">
                Full Stack
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-sans">
              Full Stack Web Platform for E-Commerce Startup
            </h1>
            <p className="text-xl text-gray-400 font-sans">
              Developed a scalable, user-centric web application from concept to deployment for a fast-growing
              e-commerce startup, integrating payment processing and real-time analytics.
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-[#2a3f5f] mb-12">
            <div className="text-center">
              <div className="text-6xl mb-4">🛍️</div>
              <p className="text-gray-400 font-sans">E-Commerce Platform</p>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 font-sans">Project Overview</h2>
            <p className="text-gray-400 mb-4 font-sans leading-relaxed">
              Our client needed a modern, scalable e-commerce platform to support their rapidly growing online business.
              The challenge was building a system that could handle high traffic volumes while providing an exceptional
              user experience.
            </p>
            <p className="text-gray-400 font-sans leading-relaxed">
              We developed a full-stack solution using modern web technologies, implementing secure payment processing,
              real-time inventory management, and comprehensive analytics to drive business decisions.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 font-sans">Key Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-[#2a3f5f] rounded-lg p-6 bg-[#0f1b28]">
                <div className="text-4xl font-bold text-primary mb-2 font-sans">99.9%</div>
                <p className="text-gray-400 font-sans">Uptime</p>
              </div>
              <div className="border border-[#2a3f5f] rounded-lg p-6 bg-[#0f1b28]">
                <div className="text-4xl font-bold text-primary mb-2 font-sans">2.5s</div>
                <p className="text-gray-400 font-sans">Average load time</p>
              </div>
              <div className="border border-[#2a3f5f] rounded-lg p-6 bg-[#0f1b28]">
                <div className="text-4xl font-bold text-primary mb-2 font-sans">10x</div>
                <p className="text-gray-400 font-sans">Performance improvement</p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 font-sans">Our Solution</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-white mb-2 font-sans">Scalable Architecture</h3>
                <p className="text-gray-400 font-sans">
                  Built on cloud infrastructure with auto-scaling capabilities to handle traffic spikes during peak
                  shopping seasons without performance degradation.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-white mb-2 font-sans">Secure Payment Integration</h3>
                <p className="text-gray-400 font-sans">
                  Integrated multiple payment gateways with PCI compliance, ensuring secure transactions and customer
                  data protection at every step.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-white mb-2 font-sans">Real-Time Analytics</h3>
                <p className="text-gray-400 font-sans">
                  Implemented comprehensive analytics dashboard providing real-time insights into sales, customer
                  behavior, and inventory levels for data-driven decision making.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-[#2a3f5f] rounded-lg p-12 bg-[#0f1b28] text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-sans">Ready to Build Something Similar?</h2>
            <p className="text-gray-400 mb-8 font-sans">
              Let's discuss how we can help you create intelligent solutions for your business.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold font-sans"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
