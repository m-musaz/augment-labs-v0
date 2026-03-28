"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20 pb-20 bg-background">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-sans">
              About <span className="text-primary">Augment Labs</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-sans">
              We're building the future of AI and web development, one intelligent solution at a time.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 border-t border-border">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 font-sans">Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-4 font-sans">
                At Augment Labs, we believe that intelligent technology should be accessible to every business. We
                partner with ambitious founders and companies to design and deploy AI-powered solutions that drive real
                business impact.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed font-sans">
                From concept to production, we deliver end-to-end solutions with the speed and quality trusted by
                Y-Combinator startups and innovative companies worldwide.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-8 border border-primary/20">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-primary text-2xl">✓</div>
                  <div>
                    <h3 className="text-white font-semibold mb-2 font-sans">AI-First Approach</h3>
                    <p className="text-gray-400 text-sm font-sans">
                      Leveraging cutting-edge AI to solve complex business problems
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-primary text-2xl">✓</div>
                  <div>
                    <h3 className="text-white font-semibold mb-2 font-sans">Full Stack Expertise</h3>
                    <p className="text-gray-400 text-sm font-sans">
                      End-to-end development from architecture to deployment
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-primary text-2xl">✓</div>
                  <div>
                    <h3 className="text-white font-semibold mb-2 font-sans">Proven Track Record</h3>
                    <p className="text-gray-400 text-sm font-sans">
                      Trusted by Y-Combinator startups and industry leaders
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-t border-border">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-sans">Leadership</h2>
          
          {/* Two Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {/* Musa Zulfiqar Card */}
            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="text-4xl font-bold text-white font-sans">MM</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 font-sans">Muhammad Musa Zulfiqar</h3>
                  <p className="text-primary font-semibold mb-4 font-sans">CEO & Founder</p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-1 font-sans">Full Stack + AI Engineer</h4>
                      <p className="text-gray-400 text-sm font-sans">
                        Upwork Top 3% - Recognized for excellence in full-stack development and AI implementation
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-1 font-sans">SoloSuit (YC US)</h4>
                      <p className="text-gray-400 text-sm font-sans">Built a Legal RAG chatbot that achieved:</p>
                      <ul className="text-gray-400 text-sm mt-1 space-y-1 ml-4 font-sans">
                        <li>• 8x higher cross-sale conversion</li>
                        <li>• 8x revenue share growth</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-1 font-sans">WebAbility (Canada)</h4>
                      <p className="text-gray-400 text-sm font-sans">
                        Scaled from $0 → $15K MRR through innovative product development and strategic execution
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ume Habiba Card */}
            {/* <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="text-4xl font-bold text-white font-sans">UH</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 font-sans">Ume Habiba</h3>
                  <p className="text-primary font-semibold mb-4 font-sans">CTO & Co-Founder</p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-1 font-sans">Full-Stack + AI Engineer</h4>
                      <p className="text-gray-400 text-sm font-sans">
                        Upwork Top 10% - Recognized for successfully completing 5 projects in a short span of 4 months.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-1 font-sans">TideMRV (Blue-Carbon MRV)</h4>
                      <p className="text-gray-400 text-sm font-sans">
                        Built end-to-end AI platform for digital Monitoring, Reporting & Verification of coastal blue-carbon projects with remote sensing and drone imagery integration.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-1 font-sans">Promogoat</h4>
                      <p className="text-gray-400 text-sm font-sans">
                        AI social-media campaign plan generator for SMEs and agencies—produces complete marketing strategies ready to launch in minutes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:opacity-90 transition font-semibold font-sans"
            >
              Work With Us
            </Link>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-t border-border">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-sans">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3 font-sans">Innovation</h3>
              <p className="text-gray-400 font-sans">
                We push boundaries and embrace cutting-edge technologies to deliver solutions that matter.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3 font-sans">Excellence</h3>
              <p className="text-gray-400 font-sans">
                We're committed to delivering exceptional quality in every project, every time.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg p-8">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3 font-sans">Partnership</h3>
              <p className="text-gray-400 font-sans">
                Your success is our success. We work as an extension of your team.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-t border-border">
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-sans">Ready to Build Something Great?</h2>
            <p className="text-gray-400 mb-8 font-sans">Let's discuss how we can help bring your vision to life.</p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:opacity-90 transition font-semibold font-sans"
            >
              Schedule a Discovery Call
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
