"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"

const MeshAnimation = dynamic(() => import("./mesh-animation"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-background" />,
})

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 lg:px-8 min-h-screen flex items-center bg-background">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-primary">Ship</span> Your Next <br />
              Big Idea.
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              We deliver end-to-end AI and web development with the speed and quality trusted by Y-Combinator startups.
            </p>

            <div className="flex gap-4 pt-4">
              <Link href="/contact">
                <button className="bg-primary text-white px-8 py-3 rounded-md hover:opacity-90 transition font-semibold">
                  Book a Discovery Call
                </button>
              </Link>
              <button className="border border-border text-foreground px-8 py-3 rounded-md hover:bg-card transition font-semibold">
                View Our Services
              </button>
            </div>
          </div>

          {/* Right 3D Animation */}
          <div className="hidden lg:block h-96 rounded-lg overflow-hidden">
            <Suspense fallback={<div className="w-full h-full bg-card" />}>
              <MeshAnimation />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}
