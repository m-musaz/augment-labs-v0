import Header from "@/components/header"
import Hero from "@/components/hero"
import TrustedBy from "@/components/trusted-by"
import Services from "@/components/services"
import WhyAugment from "@/components/why-augment"
import CaseStudy from "@/components/case-study"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustedBy />
      <Services />
      <WhyAugment />
      <CaseStudy />
      <CTASection />
      <Footer />
    </main>
  )
}
