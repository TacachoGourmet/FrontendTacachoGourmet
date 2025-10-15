import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Tacacho Gourmet Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">Tacacho Gourmet</h3>
                <p className="text-sm text-background/80">Sabor Exquisito</p>
              </div>
            </div>
            <p className="text-background/80 text-pretty max-w-md">
              Descubre el auténtico sabor de la Amazonía con nuestro Tacacho Gourmet. Tradición, innovación y pasión en
              cada plato.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#inicio" className="hover:text-background transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-background transition-colors">
                  Menú
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-background transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-background transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2025 Tacacho Gourmet. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
