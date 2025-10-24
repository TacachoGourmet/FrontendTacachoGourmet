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
  priceSmall: number
  priceLarge: number
  image: string
}

interface CartItem extends MenuItem {
  quantity: number
  size: "small" | "large"
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
    priceSmall: 24000,
    priceLarge: 32000,
    image: "/tacacho-with-mixed-meats-beef-chicken-fish-colorfu.jpg",
  },
  {
    id: "champinones",
    name: "Tacacho de Champiñones",
    description: "Exquisita variación vegetariana con champiñones frescos, plátano verde y nuestra salsa especial",
    priceSmall: 20000,
    priceLarge: 28000,
    image: "/tacacho-with-fresh-mushrooms-herbs-vegetarian-amaz.jpg",
  },
  {
    id: "ranchero",
    name: "Tacacho Ranchero",
    description: "Estilo campesino con carne de cerdo, chorizo criollo y el auténtico sabor de la selva",
    priceSmall: 22000,
    priceLarge: 30000,
    image: "/tacacho-ranchero-style-with-marinated-beef-fresh-v.jpg",
  },
  {
    id: "vegetariano",
    name: "Tacacho Vegetariano",
    description: "Opción 100% vegetal con verduras frescas, quinoa y nuestro masato especial sin lácteos",
    priceSmall: 18000,
    priceLarge: 26000,
    image: "/vegetarian-tacacho-with-seasonal-vegetables-legume.jpg",
  },
]

export function OrderSystem() {
  const [currentStep, setCurrentStep] = useState<"menu" | "checkout">("menu")
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedSizes, setSelectedSizes] = useState<Record<string, "small" | "large">>({})
  const [customerData, setCustomerData] = useState<CustomerData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    neighborhood: "",
    additionalNotes: "",
  })

  const addToCart = (item: MenuItem, size: "small" | "large") => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id && cartItem.size === size)
    if (existingItem) {
      setCart(
        cart.map((cartItem) => 
          cartItem.id === item.id && cartItem.size === size 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        ),
      )
    } else {
      setCart([...cart, { ...item, quantity: 1, size }])
    }
  }

  const removeFromCart = (itemId: string, size: "small" | "large") => {
    const existingItem = cart.find((cartItem) => cartItem.id === itemId && cartItem.size === size)
    if (existingItem && existingItem.quantity > 1) {
      setCart(
        cart.map((cartItem) => 
          cartItem.id === itemId && cartItem.size === size 
            ? { ...cartItem, quantity: cartItem.quantity - 1 } 
            : cartItem
        ),
      )
    } else {
      setCart(cart.filter((cartItem) => !(cartItem.id === itemId && cartItem.size === size)))
    }
  }

  const updateItemNotes = (itemId: string, size: "small" | "large", notes: string) => {
    setCart(cart.map((cartItem) => 
      cartItem.id === itemId && cartItem.size === size 
        ? { ...cartItem, notes } 
        : cartItem
    ))
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = item.size === "large" ? item.priceLarge : item.priceSmall
      return total + price * item.quantity
    }, 0)
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
                {cart.map((item) => {
                  const price = item.size === "large" ? item.priceLarge : item.priceSmall
                  return (
                    <div key={`${item.id}-${item.size}`} className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name} - {item.size === "large" ? "Grande" : "Pequeño"}</h4>
                        <p className="text-sm text-muted-foreground">
                          Cantidad: {item.quantity} × {formatPrice(price)}
                        </p>
                        {item.notes && <p className="text-sm text-muted-foreground italic">Nota: {item.notes}</p>}
                      </div>
                      <p className="font-medium">{formatPrice(price * item.quantity)}</p>
                    </div>
                  )
                })}
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-accent block">Haz tu Pedido</span>
          </h2>
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
            const selectedSize = selectedSizes[item.id] || "small"
            const cartItemSmall = cart.find((cartItem) => cartItem.id === item.id && cartItem.size === "small")
            const cartItemLarge = cart.find((cartItem) => cartItem.id === item.id && cartItem.size === "large")
            const cartItemSelected = cart.find((cartItem) => cartItem.id === item.id && cartItem.size === selectedSize)
            const quantitySmall = cartItemSmall?.quantity || 0
            const quantityLarge = cartItemLarge?.quantity || 0
            const quantitySelected = cartItemSelected?.quantity || 0
            const totalQuantity = quantitySmall + quantityLarge

            return (
              <Card key={item.id} className="overflow-hidden flex flex-col h-full">
                <div className="h-80 relative">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                  {totalQuantity > 0 && (
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">{totalQuantity}</Badge>
                  )}
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4 flex-grow">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-card-foreground mb-2">{item.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{item.description}</p>
                      
                      {/* Selector de tamaño */}
                      <div className="mb-4">
                        <label className="text-sm font-medium mb-2 block">Selecciona el tamaño:</label>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedSizes({...selectedSizes, [item.id]: "small"})}
                            className={`flex-1 p-3 rounded-lg border-2 transition-all ${
                              selectedSize === "small" 
                                ? "border-primary bg-primary/10 text-primary" 
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <div className="text-center">
                              <div className="font-medium">Pequeño</div>
                              <div className="text-sm font-bold">{formatPrice(item.priceSmall)}</div>
                              {quantitySmall > 0 && (
                                <div className="text-xs mt-1 text-primary">({quantitySmall} en carrito)</div>
                              )}
                            </div>
                          </button>
                          <button
                            onClick={() => setSelectedSizes({...selectedSizes, [item.id]: "large"})}
                            className={`flex-1 p-3 rounded-lg border-2 transition-all ${
                              selectedSize === "large" 
                                ? "border-primary bg-primary/10 text-primary" 
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <div className="text-center">
                              <div className="font-medium">Grande</div>
                              <div className="text-sm font-bold">{formatPrice(item.priceLarge)}</div>
                              {quantityLarge > 0 && (
                                <div className="text-xs mt-1 text-primary">({quantityLarge} en carrito)</div>
                              )}
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notas para el tamaño seleccionado */}
                  {quantitySelected > 0 && (
                    <div className="mb-4">
                      <label className="text-xs text-muted-foreground">
                        Notas para {selectedSize === "large" ? "tamaño grande" : "tamaño pequeño"}:
                      </label>
                      <Textarea
                        placeholder="Notas especiales (opcional)"
                        value={cartItemSelected?.notes || ""}
                        onChange={(e) => updateItemNotes(item.id, selectedSize, e.target.value)}
                        rows={2}
                        className="text-sm mt-1"
                      />
                    </div>
                  )}

                  {/* Controles de cantidad para el tamaño seleccionado */}
                  <div className="mt-auto">
                    <div className="text-center mb-3">
                      <p className="text-lg font-bold text-primary">
                        {selectedSize === "large" ? formatPrice(item.priceLarge) : formatPrice(item.priceSmall)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Tamaño {selectedSize === "large" ? "Grande" : "Pequeño"} seleccionado
                      </p>
                    </div>
                    
                    {quantitySelected === 0 ? (
                      <Button
                        onClick={() => addToCart(item, selectedSize)}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Agregar al Carrito
                      </Button>
                    ) : (
                      <div className="flex items-center justify-between">
                        <Button variant="outline" size="sm" onClick={() => removeFromCart(item.id, selectedSize)}>
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="mx-4 font-medium text-lg">{quantitySelected}</span>
                        <Button variant="outline" size="sm" onClick={() => addToCart(item, selectedSize)}>
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
