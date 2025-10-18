import Link from "next/link"

export default function CaseStudy() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">Our Track Record of Success</h2>

            <h3 className="text-2xl font-bold text-white mb-4 font-sans">
              Building an Expert Legal Chatbot for a YC Startup
            </h3>

            <p className="text-slate-400 mb-12 leading-relaxed font-sans">
              We partnered with a fast-moving legal tech startup to design and deploy an expert chatbot that handles
              nuanced legal FAQs, integrates securely with knowledge bases, and delivers trusted responses at scale.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              <div className="border border-slate-700 rounded-lg p-6 bg-slate-900/50">
                <div className="text-3xl font-bold text-blue-400 mb-2 font-sans">80%</div>
                <p className="text-sm text-slate-400 font-sans">Reduction in routine queries</p>
              </div>
              <div className="border border-slate-700 rounded-lg p-6 bg-slate-900/50">
                <div className="text-3xl font-bold text-blue-400 mb-2 font-sans">95%</div>
                <p className="text-sm text-slate-400 font-sans">Accuracy rating on answers</p>
              </div>
              <div className="border border-slate-700 rounded-lg p-6 bg-slate-900/50">
                <div className="text-3xl font-bold text-blue-400 mb-2 font-sans">15+</div>
                <p className="text-sm text-slate-400 font-sans">hrs/wk freed up for expert work</p>
              </div>
            </div>

            <Link href="/case-studies">
              <button className="border border-slate-600 text-white px-6 py-3 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-colors font-sans font-medium">
                View All Case Studies
              </button>
            </Link>
          </div>

          {/* Right - Chat Mockup */}
          <div className="border border-slate-700 rounded-lg p-6 bg-slate-900/50">
            <div className="mb-6 pb-4 border-b border-slate-700">
              <p className="text-sm text-slate-400 font-sans">LegalBot - Live</p>
              <p className="text-xs text-slate-500 font-sans">v2.3</p>
            </div>

            {/* Chat Messages */}
            <div className="space-y-4 mb-8">
              <div className="bg-slate-800 rounded p-3">
                <p className="text-xs text-slate-400 font-sans mb-1">User:</p>
                <p className="text-sm text-white font-sans">What are the filing deadlines for small claims in CA?</p>
              </div>
              <div className="bg-blue-900/30 rounded p-3">
                <p className="text-xs text-blue-400 font-sans mb-1">Assistant:</p>
                <p className="text-sm text-slate-200 font-sans">
                  For most cases, you have up to 2 years for oral contracts and 4 years for written contracts. This is
                  not legal advice.
                </p>
              </div>
            </div>

            {/* Analytics */}
            <div className="border-t border-slate-700 pt-6">
              <p className="text-xs text-slate-400 font-sans mb-4">Analytics</p>
              <p className="text-xs text-slate-500 font-sans mb-4">Last 30 days</p>
              <svg className="w-full h-16" viewBox="0 0 200 60" preserveAspectRatio="none">
                <path d="M 0 40 Q 50 20 100 30 T 200 15" stroke="#3b82f6" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
