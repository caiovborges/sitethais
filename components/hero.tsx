import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/intro-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-up">
          Arte ao Vivo em Casamentos
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-balance mb-8 animate-fade-up delay-100">
          Transforme momentos em <span className="italic text-primary">aquarela</span>
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up delay-200 text-pretty">
          Capturo a magia do seu grande dia através de pinturas ao vivo em aquarela, criando memórias artísticas únicas
          que você guardará para sempre
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up delay-300">
          <Button size="lg" className="uppercase tracking-wider text-sm px-8">
            Solicitar Orçamento
          </Button>
          <Button size="lg" variant="outline" className="uppercase tracking-wider text-sm px-8 bg-transparent">
            Ver Portfolio
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
