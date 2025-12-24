export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src="/about-thai-lago.png"
                alt="Thai Lago"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary rounded-lg -z-10" />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Sobre a Artista</p>
            <h3 className="font-serif text-4xl md:text-5xl font-light mb-6 text-balance">Conheça a artista</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Há mais de seis anos, Thai dedica-se às artes plásticas, cultivando um percurso marcado pela sensibilidade estética e pela busca constante de expressão. Em 2025, deu um novo desdobramento à sua trajetória artística ao levar suas pinturas para casamentos e eventos, com o propósito de perpetuar momentos singulares, transformando-os em obras que atravessam o tempo.
              </p>
              <p>
                Profundamente influenciada por artistas cuja força expressiva se revela em pinceladas carregadas de significado, Thai desenvolveu um estilo delicado, poético e emocionalmente preciso. Suas obras capturam a essência do instante não apenas o que se vê, mas aquilo que se sente.
              </p>
              <p>
                Cada pintura é concebida com extremo cuidado, atenção aos detalhes e um compromisso genuíno com a excelência. Seu trabalho busca honrar o caráter único de cada celebração, oferecendo ao cliente uma peça artística que se converte em memória eterna do dia mais importante de suas vidas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
