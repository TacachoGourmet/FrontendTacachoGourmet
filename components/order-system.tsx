"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Plus, Minus, ShoppingCart, ArrowLeft } from "lucide-react"

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
}

interface CartItem extends MenuItem {
  quantity: number
  notes?: string
}

interface CustomerData {
  name: string
  email: string
  phone: string
  address: string
  city: string
  neighborhood: string
  additionalNotes: string
}

const menuItems: MenuItem[] = [
  {
    id: "mix-carne",
    name: "Tacacho Mix de Carne",
    description: "Deliciosa combinación de carne de res, pollo y pescado con plátano verde machacado y masato cremoso",
    price: 28000,
    image: "/tacacho-with-mixed-meats-beef-chicken-fish-colorfu.jpg",
  },
  {
    id: "champinones",
    name: "Tacacho de Champiñones",
    description: "Exquisita variación vegetariana con champiñones frescos, plátano verde y nuestra salsa especial",
    price: 24000,
    image: "/tacacho-with-fresh-mushrooms-herbs-vegetarian-amaz.jpg",
  },
  {
    id: "ranchero",
    name: "Tacacho Ranchero",
    description: "Estilo campesino con carne de cerdo, chorizo criollo y el auténtico sabor de la selva",
    price: 26000,
    image: "/tacacho-ranchero-style-with-marinated-beef-fresh-v.jpg",
  },
  {
    id: "vegetariano",
    name: "Tacacho Vegetariano",
    description: "Opción 100% vegetal con verduras frescas, quinoa y nuestro masato especial sin lácteos",
    price: 22000,
    image: "/vegetarian-tacacho-with-seasonal-vegetables-legume.jpg",
  },
]

export function OrderSystem() {
  const [currentStep, setCurrentStep] = useState<"menu" | "checkout">("menu")
  const [cart, setCart] = useState<CartItem[]>([])
  const [customerData, setCustomerData] = useState<CustomerData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    neighborhood: "",
    additionalNotes: "",
  })

  const addToCart = (item: MenuItem) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)
    if (existingItem) {
      setCart(
        cart.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)),
      )
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (itemId: string) => {
    const existingItem = cart.find((cartItem) => cartItem.id === itemId)
    if (existingItem && existingItem.quantity > 1) {
      setCart(
        cart.map((cartItem) => (cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)),
      )
    } else {
      setCart(cart.filter((cartItem) => cartItem.id !== itemId))
    }
  }

  const updateItemNotes = (itemId: string, notes: string) => {
    setCart(cart.map((cartItem) => (cartItem.id === itemId ? { ...cartItem, notes } : cartItem)))
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const handleCustomerDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault()
    const orderData = {
      items: cart,
      customer: customerData,
      total: getTotalPrice(),
      timestamp: new Date().toISOString(),
    }
    console.log("Pedido enviado:", orderData)
    alert("¡Pedido enviado exitosamente! Te contactaremos pronto para confirmar la entrega.")

    // Reset form
    setCart([])
    setCustomerData({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      neighborhood: "",
      additionalNotes: "",
    })
    setCurrentStep("menu")
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  if (currentStep === "checkout") {
    return (
      <section id="pedido" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center mb-8">
            <Button variant="ghost" onClick={() => setCurrentStep("menu")} className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Menú
            </Button>
            <h2 className="text-3xl font-bold text-foreground">Finalizar Pedido</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Resumen del Pedido */}
            <Card>
              <CardHeader>
                <CardTitle>Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Cantidad: {item.quantity} × {formatPrice(item.price)}
                      </p>
                      {item.notes && <p className="text-sm text-muted-foreground italic">Nota: {item.notes}</p>}
                    </div>
                    <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
              </CardContent>
            </Card>

            {/* Datos del Cliente */}
            <Card>
              <CardHeader>
                <CardTitle>Datos de Entrega</CardTitle>
                <CardDescription>Completa tus datos para procesar el pedido</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitOrder} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Nombre completo"
                      value={customerData.name}
                      onChange={handleCustomerDataChange}
                      required
                    />
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Teléfono"
                      value={customerData.phone}
                      onChange={handleCustomerDataChange}
                      required
                    />
                  </div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={customerData.email}
                    onChange={handleCustomerDataChange}
                    required
                  />
                  <Input
                    type="text"
                    name="address"
                    placeholder="Dirección completa"
                    value={customerData.address}
                    onChange={handleCustomerDataChange}
                    required
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      name="city"
                      placeholder="Ciudad"
                      value={customerData.city}
                      onChange={handleCustomerDataChange}
                      required
                    />
                    <Input
                      type="text"
                      name="neighborhood"
                      placeholder="Barrio"
                      value={customerData.neighborhood}
                      onChange={handleCustomerDataChange}
                      required
                    />
                  </div>
                  <Textarea
                    name="additionalNotes"
                    placeholder="Notas adicionales para la entrega (opcional)"
                    value={customerData.additionalNotes}
                    onChange={handleCustomerDataChange}
                    rows={3}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    Confirmar Pedido - {formatPrice(getTotalPrice())}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="pedido" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Haz tu Pedido</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Selecciona tus platos favoritos y personaliza tu pedido
          </p>
        </div>

        {/* Carrito flotante */}
        {cart.length > 0 && (
          <div className="fixed bottom-4 right-4 z-50">
            <Button
              onClick={() => setCurrentStep("checkout")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              size="lg"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              {getTotalItems()} items - {formatPrice(getTotalPrice())}
            </Button>
          </div>
        )}

        {/* Menú de Platos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item) => {
            const cartItem = cart.find((cartItem) => cartItem.id === item.id)
            const quantity = cartItem?.quantity || 0

            return (
              <Card key={item.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                  {quantity > 0 && (
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">{quantity}</Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-card-foreground mb-2">{item.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                      <p className="text-2xl font-bold text-primary">{formatPrice(item.price)}</p>
                    </div>
                  </div>

                  {quantity > 0 && (
                    <div className="mb-4">
                      <Textarea
                        placeholder="Notas especiales para este plato (opcional)"
                        value={cartItem?.notes || ""}
                        onChange={(e) => updateItemNotes(item.id, e.target.value)}
                        rows={2}
                        className="text-sm"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    {quantity === 0 ? (
                      <Button
                        onClick={() => addToCart(item)}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Agregar al Carrito
                      </Button>
                    ) : (
                      <div className="flex items-center justify-between w-full">
                        <Button variant="outline" size="sm" onClick={() => removeFromCart(item.id)}>
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="mx-4 font-medium text-lg">{quantity}</span>
                        <Button variant="outline" size="sm" onClick={() => addToCart(item)}>
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
