"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "Building an Expert Legal Chatbot for a VC Startup",
      description:
        "We partnered with a fast-moving legal tech startup to design and deploy an expert chatbot that handles nuanced legal FAQs, integrates securely with knowledge bases, and delivers trusted responses at scale.",
      stats: [
        { value: "80%", label: "Reduction in routine queries" },
        { value: "95%", label: "Accuracy rating on answers" },
        { value: "15+ hrs/wk", label: "Freed up for expert work" },
      ],
      tags: ["AI", "Legal Tech", "Chatbot"],
      image: "/legal-chatbot-interface.jpg",
      href: "/case-studies/legal-chatbot",
    },
    {
      id: 2,
      title: "Full Stack Web Platform for E-Commerce Startup",
      description:
        "Developed a scalable, user-centric web application from concept to deployment for a fast-growing e-commerce startup, integrating payment processing and real-time analytics.",
      stats: [
        { value: "99.9%", label: "Uptime" },
        { value: "2.5s", label: "Average load time" },
        { value: "10x", label: "Performance improvement" },
      ],
      tags: ["Web Development", "E-Commerce", "Full Stack"],
      image: "/ecommerce-platform.jpg",
      href: "/case-studies/ecommerce-platform",
    },
    {
      id: 3,
      title: "RAG Chatbot for Enterprise Knowledge Management",
      description:
        "Built a retrieval-augmented generation chatbot that leverages company internal data to provide accurate, context-aware answers to employee queries.",
      stats: [
        { value: "70%", label: "Reduction in support tickets" },
        { value: "4.8/5", label: "User satisfaction rating" },
        { value: "24/7", label: "Availability" },
      ],
      tags: ["RAG", "AI", "Enterprise"],
      image: "/rag-chatbot-dashboard.jpg",
      href: "/case-studies/rag-chatbot",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 font-sans">Our Case Studies</h1>
            <p className="text-lg text-gray-400 font-sans">
              Explore how we've helped innovative companies build and scale their products.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={study.href}
                className="border border-[#2a3f5f] rounded-xl overflow-hidden bg-[#0f1b28] hover:border-primary/50 transition cursor-pointer group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  {/* Content */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full font-sans"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-4 font-sans group-hover:text-primary transition">
                        {study.title}
                      </h2>
                      <p className="text-gray-400 mb-8 font-sans leading-relaxed">{study.description}</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {study.stats.map((stat, idx) => (
                        <div key={idx} className="border-t border-[#2a3f5f] pt-4">
                          <div className="text-2xl font-bold text-primary mb-1 font-sans">{stat.value}</div>
                          <div className="text-xs text-gray-400 font-sans">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex items-center justify-center">
                    <div className="w-full h-64 lg:h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-[#2a3f5f] group-hover:border-primary/50 transition">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📊</div>
                        <p className="text-gray-400 text-sm font-sans">Case Study Visual</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="text-gray-400 mb-6 font-sans">Ready to start your next project?</p>
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
