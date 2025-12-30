"use client"

import { Button } from "@/components/ui/button"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Noivos - Gostaria de encomendar uma tela, mas meu casamento já passou. Ainda é possível?",
      answer:
        "Sim! Mesmo que o seu casamento já tenha acontecido, é totalmente possível encomendar uma pintura baseada em fotos do evento. Nessa opção, recrio o clima e os detalhes do dia.",
    },
    {
      question: "Noivos - A pintura é entregue no mesmo dia?",
      answer:
        "Não necessariamente. A base da obra é feita no evento, mas depois Thai faz os ajustes e finalizações, bem como o processo de envernizar no estúdio. A entrega final costuma acontecer em até 30 dias.",
    },
    {
      question: "Convidados - Como funciona a pintura dos convidados?",
      answer:
        "Antes do casamento, conversamos sobre a quantidade de convidados a serem retratados. No dia, a equipe realiza fotografias dos convidados que serão retratados. As aquarelas são feitas e entregues durante a festa.",
    },
    {
      question: "Thai atende em outros estados ou países?",
      answer:
        "Sim, Thai atende na localização que for contratada. São acrescidos custos de deslocamento e outras despesas realcionadas.",
    },
    {
      question: "Qual o tamanho das obras?",
      answer:
        "Para telas dos noivos, tamanhos padrões como 40x50cm e 50x70cm, mas pode ser adaptado conforme necessidade. No caso das aquarelas dos convidados, o tamanho padrão é A5 (15x21cm).",
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
            Perguntas Frequentes - Pintura ao vivo 
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
