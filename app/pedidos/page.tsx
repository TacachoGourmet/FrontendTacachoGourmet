import { OrderSystem } from "@/components/order-system"

export default function PedidosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Realiza tu Pedido</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecciona tus platos favoritos y disfruta del auténtico sabor amazónico en la comodidad de tu hogar.
          </p>
        </div>
        <OrderSystem />
      </div>
    </div>
  )
}
