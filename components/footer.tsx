import Image from "next/image"
import Link from "next/link"

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
                <Link href="/about" className="text-gray-400 hover:text-[#5b9fd8] transition-colors font-sans text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-400 hover:text-[#5b9fd8] transition-colors font-sans text-sm"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-[#5b9fd8] transition-colors font-sans text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-sans">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/agentic-ai-workflows"
                  className="text-gray-400 hover:text-[#5b9fd8] transition-colors font-sans text-sm"
                >
                  Agentic AI Workflows
                </Link>
              </li>
              <li>
                <Link
                  href="/services/full-stack-web-development"
                  className="text-gray-400 hover:text-[#5b9fd8] transition-colors font-sans text-sm"
                >
                  Full Stack Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/rag-chatbots"
                  className="text-gray-400 hover:text-[#5b9fd8] transition-colors font-sans text-sm"
                >
                  RAG Chatbots
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-sans">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/company/augment-labs-official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#5b9fd8] transition-colors font-sans text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.upwork.com/agencies/augmentlabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#5b9fd8] transition-colors font-sans text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 0 0 .006 0 .006 0 3.547 0 6.431-2.884 6.431-6.431 0-3.549-2.884-6.434-6.431-6.434z"/>
                  </svg>
                  Upwork
                </a>
              </li>
            </ul>
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
