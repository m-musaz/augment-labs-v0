import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image src="/augment-a-logo.png" alt="AUGMENT LABS" width={50} height={50} className="h-12 w-auto" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 font-sans">Augment Labs</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-sans">
              Designing intelligent, scalable products.
              <br />
              From concept to production with speed
              <br />
              and clarity.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-sans">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5b9fd8] transition-colors font-sans text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5b9fd8] transition-colors font-sans text-sm">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5b9fd8] transition-colors font-sans text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-sans">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5b9fd8] transition-colors font-sans text-sm">
                  Agentic AI Workflows
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5b9fd8] transition-colors font-sans text-sm">
                  Full Stack Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#5b9fd8] transition-colors font-sans text-sm">
                  RAG Chatbots
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-sans">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#5b9fd8] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#5b9fd8] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 5-5 7h5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-sans mb-4 sm:mb-0">© 2025 Augment Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-[#5b9fd8] transition-colors text-sm font-sans">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-[#5b9fd8] transition-colors text-sm font-sans">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
