"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const goToOrders = () => {
    window.location.href = "/pedidos"
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/images/logo.png" alt="Tacacho Gourmet Logo" width={50} height={50} className="rounded-full" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Tacacho Gourmet</h1>
              <p className="text-sm text-muted-foreground">Sabor Exquisito</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Menú
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("equipo")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Equipo
            </button>
            <Button onClick={goToOrders} className="bg-primary hover:bg-secondary/90 text-primary-foreground">
              Pedir Ahora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Menú
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("equipo")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Equipo
              </button>
              <Button onClick={goToOrders} className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                Pedir Ahora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
