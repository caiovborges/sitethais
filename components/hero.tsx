"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Função para tentar reproduzir o vídeo
    const attemptPlay = async () => {
      try {
        await video.play()
        setIsPlaying(true)
      } catch (error) {
        // Autoplay foi bloqueado
        setIsPlaying(false)
      }
    }

    // Tenta reproduzir quando o vídeo estiver pronto
    const handleCanPlay = () => {
      attemptPlay()
    }

    // Tenta reproduzir quando houver dados suficientes
    const handleLoadedData = () => {
      attemptPlay()
    }

    // Tenta reproduzir imediatamente
    attemptPlay()

    // Adiciona listeners para quando o vídeo estiver pronto
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadeddata', handleLoadedData)

    // Se autoplay falhar, tenta quando o usuário interagir com a página
    const handleInteraction = () => {
      attemptPlay()
    }

    // Escuta qualquer interação na página (não só no hero)
    document.addEventListener('click', handleInteraction, { once: true })
    document.addEventListener('touchstart', handleInteraction, { once: true })
    document.addEventListener('scroll', handleInteraction, { once: true })
    document.addEventListener('keydown', handleInteraction, { once: true })

    // Monitora o estado do vídeo
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
      document.removeEventListener('scroll', handleInteraction)
      document.removeEventListener('keydown', handleInteraction)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          poster="/artist-hand-painting-closeup.png"
          className="w-full h-full object-cover pointer-events-none video-no-controls"
        >
          <source src="/intro-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay que cobre qualquer controle que apareça */}
        <div className="absolute inset-0 z-[1] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90 z-[2]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-up">
          Arte ao Vivo em Eventos
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-balance mb-8 animate-fade-up delay-100">
          Transforme momentos em <span className="italic text-primary">arte</span>
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up delay-200 text-pretty">
          Capturo a beleza do seu grande dia através de pinturas ao vivo, criando memórias artísticas
          que você guardará para sempre
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up delay-300">
          <a href="#contato">
            <Button size="lg" className="uppercase tracking-wider text-sm px-8">
              Solicitar Orçamento
            </Button>
          </a>
          <Button size="lg" variant="outline" className="uppercase tracking-wider text-sm px-8 bg-transparent">
            Ver Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}
