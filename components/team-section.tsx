"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
	{
		name: "ANA MARIA MARTINEZ",
		role: "Chef Ejecutiva & Co-fundadora",
		description:
			"Especialista en cocina amazónica tradicional con más de 5 años de experiencia.Ana María es la mente creativa detrás de nuestras recetas gourmet, fusionando sabores ancestrales con un toque moderno. Su pasión por los ingredientes locales la ha llevado a destacar en la creación del Tacacho Gourmet, una exquisita canasta de patacón rellena de ingredientes autóctonos de Boyacá. Este plato refleja su compromiso con la sostenibilidad y la riqueza cultural de la región, ofreciendo a los comensales una experiencia única que combina tradición y sofisticación.",
		expertise: ["Cocina Amazónica", "Innovación Culinaria", "Gestión de Cocina"],
		image: "/professional-chef-woman-smiling-in-kitchen.jpg",
	},
	{
		name: "MANUELA NOY",
		role: "Directora de Operaciones & Co-fundadora",
		description:
			"Experta en gestión gastronómica, administración y experiencia del cliente, se encarga de supervisar minuciosamente cada etapa del proceso operativo, desde la planificación de la producción hasta la presentación final de los productos. Su labor se centra en garantizar la eficiencia en las operaciones, la calidad en cada detalle y la excelencia en el servicio. Gracias a su liderazgo estratégico, coordina los equipos de trabajo, impulsa la mejora continua y promueve una cultura de compromiso y responsabilidad. Además, vela porque cada producto conserve los más altos estándares de sabor, presentación e higiene, asegurando que la experiencia del cliente sea siempre excepcional, memorable y refleje los valores de la empresa.",
		expertise: ["Gestión Operativa", "Experiencia Cliente", "Desarrollo de Negocio"],
		image: "/professional-business-woman-smiling-in-restaurant.jpg",
	},
	{
		name: "MIGUEL MALAGÓN",
		role: "Chef de Innovación & Co-fundador",
		description:
			"Encarna la fusión perfecta entre la creatividad culinaria y la visión estratégica del negocio. En su rol de chef, es el arquitecto del sabor, responsable de investigar, experimentar y desarrollar el concepto culinario único que diferencia a la marca, garantizando la calidad y consistencia de cada plato. Simultáneamente, como co-fundador, es un socio estratégico que participa activamente en las decisiones clave del negocio, desde el modelo operativo y el branding hasta la planificación financiera, contribuyendo a moldear la cultura e identidad de la empresa desde sus cimientos. Este doble cargo lo posiciona como un líder multitarea cuyo día a día transita entre la creación en la cocina y la gestión en la mesa directiva, siempre con la misión de transformar su pasión gastronómica en un emprendimiento sostenible y exitoso.",
		expertise: ["Técnicas Modernas", "Desarrollo de Producto", "Fusión Culinaria"],
		image: "/professional-male-chef-smiling-in-modern-kitchen.jpg",
	},
]

export function TeamSection() {
	return (
		<section id="equipo" className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-16">
					{/* Título a la izquierda */}
					<div className="text-left">
						<h2 className="text-3xl md:text-6xl font-bold text-foreground text-primary">
							Conoce a <br />
              Nuestro Equipo
						</h2>
					</div>

					{/* Imagen en el centro */}
					<div className="flex justify-center">
						<div className="relative">
							<img
								src="/Team.jpg"
								alt="Foto del equipo Tacacho Gourmet"
								className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
							/>
							<div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 blur-lg"></div>
						</div>
					</div>

					{/* Descripción a la derecha */}
					<div className="text-right">
						<p className="text-lg text-muted-foreground max-w-3xl text-pretty">
							Los visionarios detrás de Tacacho Gourmet. Un equipo apasionado que combina tradición, innovación y
							excelencia para llevarte la mejor experiencia culinaria amazónica.
						</p>
					</div>
				</div>

				{/* Tarjetas del equipo */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{teamMembers.map((member, index) => (
						<Card
							key={index}
							className="group cursor-pointer transition-all duration-500 hover:shadow-2xl border-2 border-transparent hover:border-primary/50"
						>
							<CardContent className="p-6 space-y-4">
								<div className="text-center">
									<h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
										{member.name}
									</h3>
									<p className="text-primary font-semibold text-sm">
										{member.role}
									</p>
								</div>

								<p className="text-muted-foreground text-sm text-pretty leading-relaxed">
									{member.description}
								</p>

								<div className="flex flex-wrap gap-2 justify-center">
									{member.expertise.map((skill, skillIndex) => (
										<Badge
											key={skillIndex}
											variant="secondary"
											className="text-xs bg-[var(--highlight)] text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
										>
											{skill}
										</Badge>
									))}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
