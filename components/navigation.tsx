"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0">
            <h1 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-foreground">Thai Lago</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
              Início
            </a>
            <a
              href="#pintura-ao-vivo"
              className="text-sm uppercase tracking-wider hover:text-primary transition-colors"
            >
              Pintura Ao Vivo
            </a>
            <a href="#portfolio" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
              Portfólio
            </a>
            <a href="#sobre" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#duvidas" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
              Dúvidas
            </a>
            <a href="#contato">
              <Button size="sm" className="uppercase tracking-wider">
                Contato
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <a
              href="#inicio"
              className="block text-sm uppercase tracking-wider hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Início
            </a>
            <a
              href="#pintura-ao-vivo"
              className="block text-sm uppercase tracking-wider hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pintura Ao Vivo
            </a>
            <a
              href="#portfolio"
              className="block text-sm uppercase tracking-wider hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Portfólio
            </a>
            <a
              href="#sobre"
              className="block text-sm uppercase tracking-wider hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#duvidas"
              className="block text-sm uppercase tracking-wider hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Dúvidas
            </a>
            <a href="#contato" onClick={() => setIsOpen(false)}>
              <Button className="w-full uppercase tracking-wider">Contato</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
