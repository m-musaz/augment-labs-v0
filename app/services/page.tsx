import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: "agentic-ai-workflows",
      icon: "+",
      title: "Agentic AI Workflows",
      description:
        "We design intelligent agents that autonomously handle complex, multi-step tasks to streamline your core business operations.",
      shortDescription:
        "Intelligent agents that autonomously handle complex, multi-step tasks to streamline your core business operations.",
      features: [
        "Multi-step task automation",
        "Intelligent decision making",
        "Seamless integration with existing systems",
        "Real-time monitoring and optimization",
      ],
    },
    {
      id: "full-stack-web-development",
      icon: "≡",
      title: "Full Stack Web Development",
      description:
        "We build robust, scalable, and user-centric web applications that power your business, from idea to deployment.",
      shortDescription:
        "Robust, scalable, and user-centric web applications that power your business, from idea to deployment.",
      features: [
        "Modern frontend frameworks",
        "Scalable backend architecture",
        "Database design and optimization",
        "Deployment and maintenance",
      ],
    },
    {
      id: "rag-chatbots",
      icon: "⌀",
      title: "RAG Chatbots",
      description:
        "Leverage your company's internal data to provide accurate, context-aware answers with our custom RAG solutions.",
      shortDescription:
        "Leverage your company's internal data to provide accurate, context-aware answers with our custom RAG solutions.",
      features: [
        "Knowledge base integration",
        "Context-aware responses",
        "Multi-language support",
        "Analytics and insights",
      ],
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver end-to-end AI and web development solutions tailored to your business needs.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="border border-border rounded-md p-8 hover:border-primary/50 hover:bg-card/30 transition cursor-pointer group"
                >
                  <div className="text-5xl text-primary mb-6 font-light group-hover:scale-110 transition">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{service.shortDescription}</p>
                  <span className="text-primary group-hover:text-primary/80 transition font-semibold text-sm">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
