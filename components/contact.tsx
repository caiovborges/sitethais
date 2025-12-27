"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Instagram } from "lucide-react"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"

export function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Credenciais do EmailJS
      const serviceId = "service_vb4qozq"
      const templateId = "template_jp5452a"
      const publicKey = "pPuOvsRtNDq0F4f_I"

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        wedding_date: formData.date,
        message: formData.message,
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      toast.success("Mensagem enviada com sucesso!")
      
      // Rastrear evento Lead no Facebook Pixel
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead')
      }
      
      // Limpar o formulário
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        message: "",
      })
    } catch (error) {
      console.error("Erro ao enviar email:", error)
      toast.error("Erro ao enviar mensagem. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

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
                    71 99168-6688
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
                    href="https://www.instagram.com/ateliethailago/"
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Nome
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Seu nome" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                  Telefone
                </label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="Seu Telefone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="date" className="text-sm font-medium mb-2 block">
                  Data do Casamento
                </label>
                <Input 
                  id="date" 
                  type="date" 
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Mensagem
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Conte-me sobre o seu casamento e como posso ajudar..." 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full uppercase tracking-wider"
                disabled={isLoading}
              >
                {isLoading ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
