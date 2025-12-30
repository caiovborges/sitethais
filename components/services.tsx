import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Users, Heart, Gift, Sparkles } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Heart,
      title: "Pintura dos Noivos",
      description: "Uma pintura de um momento especial para os noivos feita ao vivo durante o casamento.",
      features: ["Obra criada a partir da história e estilo do casal", "Técnica em acrílico ou óleo", "Uma memória para durar gerações"],
    },
    {
      icon: Palette,
      title: "Pintura dos Convidados",
      description: "Ofereça aos seus convidados uma lembrança especial com retratos individuais em aquarela.",
      features: ["Pinturas feitas no dia do casamento", "Materiais Profissionais", "Lembrança única entregue no dia"],
    },
    {
      icon: Sparkles,
      title: "Identidade Visual",
      description: "Identidade que traduz a essência do evento, trazendo delicadeza e personalidade para cada detalhe.",
      features: ["Convites e Papelaria", "Design Exclusivo ", "Conjunto visual harmônico para o casamento"],
    },
    {
      icon: Gift,
      title: "Encomendas",
      description: "Projetosde arte e design para o seu evento.",
    features: ["Árvore de digitais ao Vivo", "Quadros", "Presentes para padrinhos", "Outras Encomendas"],
    },
  ]

  return (
    <section id="servicos" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Serviços</p>
          <h3 className="font-serif text-4xl md:text-5xl font-light mb-6 text-balance">
            Como posso tornar seu dia ainda mais especial
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl font-light">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
