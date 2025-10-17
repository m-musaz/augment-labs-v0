export default function WhyAugment() {
  const features = [
    {
      icon: "✓",
      title: "Y-Combinator Trusted",
      description:
        "Our experience with high-stakes YC projects ensures we meet the highest standards of quality and speed.",
    },
    {
      icon: "💬",
      title: "Unparalleled Client Communication",
      description:
        "You get a dedicated point of contact and direct access to our senior team. No surprises, just clarity.",
    },
    {
      icon: "📈",
      title: "True End-to-End Delivery",
      description:
        "We partner with you from the first sketch to the final scalable deployment, ensuring a cohesive final product.",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 font-sans">Why Augment Labs?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-slate-700 rounded-lg p-8 bg-slate-900/50 hover:border-blue-500/50 transition-colors"
            >
              <div className="text-3xl text-blue-400 mb-4 font-sans">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 font-sans">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed font-sans">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
