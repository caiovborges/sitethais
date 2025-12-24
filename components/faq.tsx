"use client"

import { Button } from "@/components/ui/button"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Gostaria de encomendar uma tela, mas meu casamento já passou. Ainda é possível?",
      answer:
        "Sim! Mesmo que o seu casamento já tenha acontecido, é totalmente possível encomendar uma pintura baseada em fotos do evento. Nessa opção, recrio o clima e os detalhes do dia.",
    },
    {
      question: "Thai atende em outros estados e países?",
      answer:
        "Sim! Thai atende em outras cidades e estados, com acréscimo de custos de deslocamento e hospedagem quando necessário da artista e assistente. Para casamentos internacionais, é ideal contratação do serviço com pelo menos 6 meses de antecedência.",
    },
    {
      question: "Posso escolher o estilo ou o momento que será pintado?",
      answer:
        "Sim! Antes do casamento, conversamos sobre o estilo desejado, as cores, o formato da tela e qual momento vocês gostariam que fosse retratado. Thai dará sugestões com base no seu olhar, do que acredita ser melhor, assim cada pintura é personalizada para contar a história de vocês.",
    },
    {
      question: "A pintura é entregue no mesmo dia?",
      answer:
        "Não necessariamente. A base da obra é feita no evento, mas depois Thai faz os ajustes e finalizações, bem como o processo de envernizar no estúdio. A entrega final costuma acontecer em até 30 dias.",
    },
    {
      question: "Qual o tamanho da tela?",
      answer:
        "Tamanhos padrões como 40x50cm e 50x70cm, mas pode ser adaptado conforme necessidade.",
    },
  ]

  return (
    <section id="duvidas" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Perguntas Frequentes - Pintura ao vivo dos noivos
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
          <a href="#contato">
            <Button size="lg" className="uppercase tracking-wider">
              Entre em Contato
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
