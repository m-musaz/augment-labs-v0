"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function RAGChatbotPage() {
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
                RAG
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full font-sans">
                AI
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full font-sans">
                Enterprise
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-sans">
              RAG Chatbot for Enterprise Knowledge Management
            </h1>
            <p className="text-xl text-gray-400 font-sans">
              Built a retrieval-augmented generation chatbot that leverages company internal data to provide accurate,
              context-aware answers to employee queries.
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-[#2a3f5f] mb-12">
            <div className="text-center">
              <div className="text-6xl mb-4">🤖</div>
              <p className="text-gray-400 font-sans">RAG Chatbot Dashboard</p>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 font-sans">Project Overview</h2>
            <p className="text-gray-400 mb-4 font-sans leading-relaxed">
              A large enterprise needed to improve internal knowledge sharing and reduce support ticket volume.
              Employees were spending significant time searching through documentation and asking repetitive questions.
            </p>
            <p className="text-gray-400 font-sans leading-relaxed">
              We built a retrieval-augmented generation chatbot that indexes the company's internal documentation,
              policies, and procedures, enabling employees to get instant, accurate answers to their questions 24/7.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 font-sans">Key Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-[#2a3f5f] rounded-lg p-6 bg-[#0f1b28]">
                <div className="text-4xl font-bold text-primary mb-2 font-sans">70%</div>
                <p className="text-gray-400 font-sans">Reduction in support tickets</p>
              </div>
              <div className="border border-[#2a3f5f] rounded-lg p-6 bg-[#0f1b28]">
                <div className="text-4xl font-bold text-primary mb-2 font-sans">4.8/5</div>
                <p className="text-gray-400 font-sans">User satisfaction rating</p>
              </div>
              <div className="border border-[#2a3f5f] rounded-lg p-6 bg-[#0f1b28]">
                <div className="text-4xl font-bold text-primary mb-2 font-sans">24/7</div>
                <p className="text-gray-400 font-sans">Availability</p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 font-sans">Our Solution</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-white mb-2 font-sans">Knowledge Base Integration</h3>
                <p className="text-gray-400 font-sans">
                  Indexed and connected the chatbot to all internal documentation, policies, and procedures, ensuring
                  responses are always grounded in official company information.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-white mb-2 font-sans">Context-Aware Responses</h3>
                <p className="text-gray-400 font-sans">
                  Implemented RAG technology to provide highly relevant, context-aware answers that cite specific
                  sources, building employee trust in the system.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-white mb-2 font-sans">Continuous Improvement</h3>
                <p className="text-gray-400 font-sans">
                  Set up feedback loops and analytics to continuously improve response quality and identify gaps in the
                  knowledge base for regular updates.
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
