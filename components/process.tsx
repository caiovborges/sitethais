export function Process() {
  const steps = [
    {
      number: "01",
      title: "Consulta Inicial",
      description: "Conversamos sobre sua visão, estilo e os momentos especiais que deseja capturar no seu casamento. Seja dos convidados ou uma pintura dos noivos. ",
    },
    {
      number: "02",
      title: "Planejamento",
      description: "Defino os detalhes: horários, localizações e quais momentos serão pintados ao vivo.",
    },
    {
      number: "03",
      title: "O Grande Dia",
      description: "No dia do casamento, pinto os momentos escolhidos, criando arte em tempo real.",
    },
    {
      number: "04",
      title: "Entrega Final",
      description: "Finalizo os detalhes e entrego os presentes dos convidados. No caso da pintura dos noivos, pode ser levada para ser finalizada no ateliê.",
    },
  ]

  return (
    <section id="processo" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Processo</p>
          <h3 className="font-serif text-4xl md:text-5xl font-light mb-6 text-balance">Como funciona</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Do primeiro contato até a entrega da sua obra de arte personalizada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="relative z-10">
                <div className="font-serif text-6xl md:text-7xl font-light text-primary/20 mb-4">{step.number}</div>
                <h4 className="font-serif text-2xl font-light mb-3">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-border -z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
