"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      image: "/placeholder-user.jpg",
      text: "A Thai transformou nosso casamento em uma obra de arte. A pintura dos noivos ficou incrível e todos os convidados adoraram as aquarelas. Foi o presente perfeito!",
    },
    {
      name: "João Santos",
      image: "/placeholder-user.jpg",
      text: "Profissionalismo e talento excepcionais. A pintura ao vivo durante a cerimônia foi um momento mágico. Recomendo de olhos fechados!",
    },
    {
      name: "Ana Costa",
      image: "/placeholder-user.jpg",
      text: "A experiência foi única! A Thai capturou perfeitamente a emoção do nosso dia especial. A obra ficou linda e será uma lembrança eterna.",
    },
    {
      name: "Pedro Oliveira",
      image: "/placeholder-user.jpg",
      text: "Superou todas as expectativas! A atenção aos detalhes e a sensibilidade artística da Thai são impressionantes. Nossos convidados ficaram encantados.",
    },
  ]

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Depoimentos</p>
          <h3 className="font-serif text-4xl md:text-5xl font-light mb-6 text-balance">
            O que nossos clientes dizem
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors gap-0">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="w-12 h-12 rounded-full overflow-hidden cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0">
                        <img
                          src={testimonial.image || "/placeholder-user.jpg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0 shadow-none">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src={testimonial.image || "/placeholder-user.jpg"}
                          alt={testimonial.name}
                          className="max-w-full max-h-[90vh] object-contain rounded-lg"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <CardTitle className="font-serif text-xl font-light">
                    {testimonial.name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-2 pb-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

