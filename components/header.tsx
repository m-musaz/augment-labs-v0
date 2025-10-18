"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-0 flex items-center justify-between h-20">
        {/* Logo - Full Height */}
        <Link href="/" className="flex items-center h-full">
          <Image src="/augment-a-logo.png" alt="AUGMENT LABS" width={60} height={60} className="h-full w-auto" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <Link href="/services" className="text-foreground hover:text-primary transition text-sm font-medium">
            Services
          </Link>
          <Link href="/case-studies" className="text-foreground hover:text-primary transition text-sm font-medium">
            Case Studies
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition text-sm font-medium">
            Contact
          </Link>
          <Link href="/blog" className="text-foreground hover:text-primary transition text-sm font-medium">
            Blog
          </Link>
        </nav>

        <Link
          href="/contact"
          className="bg-primary text-white px-6 py-2.5 rounded-md hover:opacity-90 transition font-semibold text-sm"
        >
          Book a Demo
        </Link>
      </div>
    </header>
  )
}
