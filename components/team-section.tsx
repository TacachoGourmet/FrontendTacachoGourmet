"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    name: "ANA MARIA MARTINEZ",
    role: "Chef Ejecutiva & Co-fundadora",
    description:
      "Especialista en cocina amazónica tradicional con más de 15 años de experiencia. Ana María es la mente creativa detrás de nuestras recetas gourmet.",
    expertise: ["Cocina Amazónica", "Innovación Culinaria", "Gestión de Cocina"],
    image: "/professional-chef-woman-smiling-in-kitchen.jpg",
  },
  {
    name: "MANUELA NOY",
    role: "Directora de Operaciones & Co-fundadora",
    description:
      "Experta en gestión gastronómica y experiencia del cliente. Manuela asegura que cada aspecto de nuestro servicio refleje la excelencia.",
    expertise: ["Gestión Operativa", "Experiencia Cliente", "Desarrollo de Negocio"],
    image: "/professional-business-woman-smiling-in-restaurant.jpg",
  },
  {
    name: "MIGUEL MALAGÓN",
    role: "Chef de Innovación & Co-fundador",
    description:
      "Pionero en la fusión de técnicas modernas con sabores tradicionales. Miguel lidera el desarrollo de nuevos productos y presentaciones.",
    expertise: ["Técnicas Modernas", "Desarrollo de Producto", "Fusión Culinaria"],
    image: "/professional-male-chef-smiling-in-modern-kitchen.jpg",
  },
]

export function TeamSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="equipo" className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Conoce a Nuestro Equipo</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Los visionarios detrás de Tacacho Gourmet. Un equipo apasionado que combina tradición, innovación y
            excelencia para llevarte la mejor experiencia culinaria amazónica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl border-2 ${
                hoveredCard === index
                  ? "border-primary shadow-2xl scale-105"
                  : "border-transparent hover:border-primary/50"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold text-sm">{member.role}</p>
                  </div>

                  <p className="text-muted-foreground text-sm text-pretty leading-relaxed">{member.description}</p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
