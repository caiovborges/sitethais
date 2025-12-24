"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Instagram } from "lucide-react"

export function Contact() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Vamos Conversar</p>
            <h3 className="font-serif text-4xl md:text-5xl font-light mb-6 text-balance">
              Pronta para começar seu projeto?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              Adoraria ouvir sobre o seu casamento e como posso torná-lo ainda mais especial através da arte em
              aquarela. Entre em contato para conversarmos!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:hellothailago@gmail.com" className="hover:text-primary transition-colors">
                    hellothailago@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <a href="tel:+5571991686688" className="hover:text-primary transition-colors">
                    (71) 99168-6688
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Instagram className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Instagram</p>
                  <a
                    href="https://www.instagram.com/ateliethailago"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    @ateliethailago
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 border-2">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Nome
                  </label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                  Telefone
                </label>
                <Input id="phone" type="tel" placeholder="(71) 99168-6688" />
              </div>

              <div>
                <label htmlFor="date" className="text-sm font-medium mb-2 block">
                  Data do Casamento
                </label>
                <Input id="date" type="date" />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Mensagem
                </label>
                <Textarea id="message" placeholder="Conte-me sobre o seu casamento e como posso ajudar..." rows={5} />
              </div>

              <Button type="submit" className="w-full uppercase tracking-wider">
                Enviar Mensagem
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
