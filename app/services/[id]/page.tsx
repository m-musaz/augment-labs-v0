import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const services: Record<
    string,
    {
      title: string
      icon: string
      description: string
      features: string[]
      benefits: string[]
      process: string[]
    }
  > = {
    "agentic-ai-workflows": {
      title: "Agentic AI Workflows",
      icon: "+",
      description:
        "We design intelligent agents that autonomously handle complex, multi-step tasks to streamline your core business operations.",
      features: [
        "Multi-step task automation",
        "Intelligent decision making",
        "Seamless integration with existing systems",
        "Real-time monitoring and optimization",
        "Custom training and fine-tuning",
        "Scalable infrastructure",
      ],
      benefits: [
        "Reduce operational costs by up to 60%",
        "Increase efficiency and productivity",
        "Minimize human error",
        "24/7 availability",
        "Continuous learning and improvement",
        "Competitive advantage",
      ],
      process: [
        "Discovery and requirements gathering",
        "Agent design and architecture",
        "Integration with your systems",
        "Testing and optimization",
        "Deployment and monitoring",
        "Ongoing support and improvements",
      ],
    },
    "full-stack-web-development": {
      title: "Full Stack Web Development",
      icon: "≡",
      description:
        "We build robust, scalable, and user-centric web applications that power your business, from idea to deployment.",
      features: [
        "Modern frontend frameworks (React, Next.js)",
        "Scalable backend architecture",
        "Database design and optimization",
        "API development and integration",
        "Security best practices",
        "Performance optimization",
      ],
      benefits: [
        "Fast time to market",
        "Scalable architecture",
        "Excellent user experience",
        "Maintainable codebase",
        "Security and compliance",
        "Future-proof technology stack",
      ],
      process: [
        "Project planning and scoping",
        "UI/UX design",
        "Frontend development",
        "Backend development",
        "Testing and QA",
        "Deployment and launch",
      ],
    },
    "rag-chatbots": {
      title: "RAG Chatbots",
      icon: "⌀",
      description:
        "Leverage your company's internal data to provide accurate, context-aware answers with our custom RAG solutions.",
      features: [
        "Knowledge base integration",
        "Context-aware responses",
        "Multi-language support",
        "Analytics and insights",
        "Custom training data",
        "Real-time updates",
      ],
      benefits: [
        "Improved customer satisfaction",
        "Reduced support costs",
        "24/7 availability",
        "Consistent responses",
        "Data-driven insights",
        "Competitive advantage",
      ],
      process: [
        "Knowledge base preparation",
        "RAG model selection and training",
        "Integration with your platform",
        "Testing and refinement",
        "Deployment",
        "Monitoring and optimization",
      ],
    },
  }

  const service = services[params.id]

  if (!service) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/services"
              className="text-primary hover:text-primary/80 transition font-semibold text-sm mb-6 inline-block"
            >
              ← Back to Services
            </Link>
            <div className="mt-8">
              <div className="text-6xl text-primary mb-6 font-light">{service.icon}</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{service.title}</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">{service.description}</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-white">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-primary text-2xl font-light flex-shrink-0">✓</div>
                  <div>
                    <p className="text-white font-semibold">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-white">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="border border-border rounded-md p-6 hover:border-primary/50 transition">
                  <p className="text-white">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-white">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.process.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto">
                    {i + 1}
                  </div>
                  <p className="text-white font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-background">
          <div className="max-w-2xl mx-auto border border-border rounded-lg p-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8">Let's discuss how {service.title} can transform your business.</p>
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-md hover:opacity-90 transition font-semibold inline-block"
            >
              Book a Discovery Call
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
