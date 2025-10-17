export default function TrustedBy() {
  const companies = [
    { name: "Y-Combinat...", full: "Y-Combinator" },
    { name: "Alpha Syst...", full: "Alpha Systems" },
    { name: "Quantum On...", full: "Quantum One" },
    { name: "Helix Bio", full: "Helix Bio" },
    { name: "Nova Cloud", full: "Nova Cloud" },
  ]

  return (
    <section className="py-20 px-6 lg:px-8 border-t border-b border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-12">
          Trusted by industry leaders and innovators
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
          {companies.map((company, i) => (
            <div
              key={i}
              className="border border-border rounded-md p-4 w-full h-20 flex items-center justify-center hover:border-primary/50 transition"
            >
              <span className="text-muted-foreground text-sm font-medium text-center">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
