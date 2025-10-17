import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="border border-[#2a3f5f] rounded-2xl py-16 px-8 text-center bg-gradient-to-b from-[#1f3a52] to-[#1a2f42]">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-sans">Have a project in mind?</h2>
          <p className="text-lg text-gray-300 mb-8 font-sans">Let's build it together.</p>
          <Link href="/contact">
            <button className="bg-[#5b9fd8] hover:bg-[#4a8bc4] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 font-sans">
              Book a Discovery Call
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
