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
