"use client"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Portfolio() {

  const artworks = [
    {
      id: 1,
      title: "Evelyn e Gabriel, 2025.",
      venue: "Acrílico sob tela, 50x70cm",
      image: "/portfolio-1.png",
      className: "sm:col-span-1 lg:col-span-1",
    },
    {
      id: 2,
      title: "Aquarela dos Convidados",
      venue: "A5, 300g",
      image: "/portfolio-5.png",
      className: "sm:col-span-1 lg:col-span-1",
    },
    {
      id: 3,
      title: "Juliana e Everton",
      venue: "Acrílico sob tela, 40x50cm",
      image: "/portfolio-4.png",
      className: "sm:col-span-1 lg:col-span-1",
    },
    {
      id: 4,
      title: "Aquarela dos Convidados",
      venue: "A5, 300g",
      image: "/portfolio-3.png",
      className: "sm:col-span-1 lg:col-span-1",
    },
    {
      id: 5,
       title: "Beatriz e Bruno",
      venue: "Acrílico sob tela, 40x50cm",
      image: "/portfolio-2.png",
      className: "sm:col-span-1 lg:col-span-1",
    },
    {
      id: 5,
       title: "Aquarelas dos Convidados",
      venue: "A5,300G",
      image: "/portfolio-6.jpg",
      className: "sm:col-span-1 lg:col-span-1",
    },
  ]

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Portfolio</p>
          <h3 className="font-serif text-4xl md:text-5xl font-light mb-6 text-balance">
            Momentos transformados em arte
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cada pintura conta uma história única, capturando a emoção e a beleza dos momentos mais especiais
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
          {artworks.map((artwork) => (
            <Dialog key={artwork.id}>
              <DialogTrigger asChild>
                <div className="group relative overflow-hidden rounded-lg cursor-pointer break-inside-avoid mb-6 lg:mb-8">
                  <div className="aspect-[4/5]">
                    <img
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-background transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-serif text-2xl mb-1">{artwork.title}</h4>
                    <p className="text-sm uppercase tracking-wider opacity-90">{artwork.venue}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-6xl w-full p-0 bg-transparent border-0 shadow-none">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={artwork.image || "/placeholder.svg"}
                    alt={artwork.title}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
