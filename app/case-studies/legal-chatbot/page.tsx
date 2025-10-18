"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function LegalChatbotPage() {
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
                AI
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full font-sans">
                Legal Tech
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full font-sans">
                Chatbot
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-sans">
              Building an Expert Legal Chatbot for a VC Startup
            </h1>
            <p className="text-xl text-gray-400 font-sans">
              We partnered with a fast-moving legal tech startup to design and deploy an expert chatbot that handles
              nuanced legal FAQs, integrates securely with knowledge bases, and delivers trusted responses at scale.
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-[#2a3f5f] mb-12">
            <div className="text-center">
              <div className="text-6xl mb-4">⚖️</div>
              <p className="text-gray-400 font-sans">Legal Chatbot Interface</p>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 font-sans">Project Overview</h2>
            <p className="text-gray-400 mb-4 font-sans leading-relaxed">
              Our client, a rapidly growing legal tech startup, needed an intelligent chatbot to handle complex legal
              questions from their users. The challenge was creating a system that could accurately answer nuanced legal
              queries while maintaining compliance and security standards.
            </p>
            <p className="text-gray-400 font-sans leading-relaxed">
              We designed and deployed a retrieval-augmented generation (RAG) chatbot that integrates with their
              proprietary legal knowledge base, ensuring responses are both accurate and up-to-date with the latest
              legal information.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 font-sans">Key Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-[#2a3f5f] rounded-lg p-6 bg-[#0f1b28]">
                <div className="text-4xl font-bold text-primary mb-2 font-sans">80%</div>
                <p className="text-gray-400 font-sans">Reduction in routine queries</p>
              </div>
              <div className="border border-[#2a3f5f] rounded-lg p-6 bg-[#0f1b28]">
                <div className="text-4xl font-bold text-primary mb-2 font-sans">95%</div>
                <p className="text-gray-400 font-sans">Accuracy rating on answers</p>
              </div>
              <div className="border border-[#2a3f5f] rounded-lg p-6 bg-[#0f1b28]">
                <div className="text-4xl font-bold text-primary mb-2 font-sans">15+ hrs/wk</div>
                <p className="text-gray-400 font-sans">Freed up for expert work</p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 font-sans">Our Solution</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-white mb-2 font-sans">Advanced RAG Architecture</h3>
                <p className="text-gray-400 font-sans">
                  Implemented a sophisticated retrieval-augmented generation system that combines large language models
                  with your proprietary legal knowledge base for accurate, contextual responses.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-white mb-2 font-sans">Security & Compliance</h3>
                <p className="text-gray-400 font-sans">
                  Built with enterprise-grade security protocols to ensure sensitive legal information remains protected
                  while maintaining full compliance with data privacy regulations.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-white mb-2 font-sans">Continuous Learning</h3>
                <p className="text-gray-400 font-sans">
                  Designed the system to continuously improve through user feedback and regular updates to the knowledge
                  base, ensuring responses stay current with legal developments.
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
