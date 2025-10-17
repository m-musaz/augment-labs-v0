export default function Services() {
  const services = [
    {
      icon: "+",
      title: "Agentic AI Workflows",
      description:
        "We design intelligent agents that autonomously handle complex, multi-step tasks to streamline your core business operations.",
    },
    {
      icon: "≡",
      title: "Full Stack Web Development",
      description:
        "We build robust, scalable, and user-centric web applications that power your business, from idea to deployment.",
    },
    {
      icon: "⌀",
      title: "RAG Chatbots",
      description:
        "Leverage your company's internal data to provide accurate, context-aware answers with our custom RAG solutions.",
    },
  ]

  return (
    <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-20 text-white">Our Core Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="border border-border rounded-md p-8 hover:border-primary/50 hover:bg-card/30 transition"
            >
              <div className="text-5xl text-primary mb-6 font-light">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">{service.description}</p>
              <a href="#" className="text-primary hover:text-primary/80 transition font-semibold text-sm">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
