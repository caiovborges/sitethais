import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Users, Heart, Gift } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Palette,
      title: "Pintura ao Vivo",
      description: "Crio pinturas em aquarela durante o seu casamento, capturando momentos em tempo real.",
      features: ["Cerimônia completa", "Momentos especiais", "Entrega no dia"],
    },
    {
      icon: Heart,
      title: "Retratos de Noivos",
      description: "Pinturas personalizadas do casal, ideais para decoração ou presentes únicos.",
      features: ["Obra personalizada", "Alta qualidade", "Pronta em 2 semanas"],
    },
    {
      icon: Users,
      title: "Retratos de Convidados",
      description: "Ofereça aos seus convidados uma lembrança especial com retratos individuais em aquarela.",
      features: ["15-20 retratos/hora", "Formato compacto", "Lembrança única"],
    },
    {
      icon: Gift,
      title: "Convites em Aquarela",
      description: "Designs exclusivos de convites e papelaria para casamento pintados à mão.",
      features: ["Design exclusivo", "Impressão premium", "Peças coordenadas"],
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
