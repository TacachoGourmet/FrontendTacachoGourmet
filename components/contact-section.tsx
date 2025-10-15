"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para procesar el pedido
    console.log("Pedido enviado:", formData)
    alert("¡Gracias por tu pedido! Te contactaremos pronto.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Haz tu Pedido</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            ¿Listo para disfrutar del auténtico sabor amazónico? Contáctanos para hacer tu pedido o reservar tu mesa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulario de Contacto */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Realizar Pedido</CardTitle>
              <CardDescription>
                Completa el formulario y nos pondremos en contacto contigo para confirmar tu pedido.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Tu correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Tu número de teléfono"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-input"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Detalles de tu pedido (cantidad, variaciones, dirección de entrega, etc.)"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-input"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  Enviar Pedido
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Información de Contacto */}
          <div className="space-y-6">
            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Teléfono</h3>
                    <p className="text-muted-foreground">+57 (1) 234-5678</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary text-secondary-foreground p-3 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Email</h3>
                    <p className="text-muted-foreground">pedidos@tacachogourmet.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Ubicación</h3>
                    <p className="text-muted-foreground">Calle 123 #45-67, Bogotá, Colombia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary text-secondary-foreground p-3 rounded-full">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Horarios</h3>
                    <p className="text-muted-foreground">Lun - Dom: 11:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
