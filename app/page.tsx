import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="inicio" />
      <div id="pintura-ao-vivo">
        <Services />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="sobre">
        <About />
      </div>
      <Process />
      <FAQ />
      <div id="contato">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
