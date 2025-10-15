import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const menuItems = [
  {
    id: 1,
    name: "Tacacho Mix de Carne",
    description:
      "Combinación exclusiva de carne de res, pollo y pescado con láminas crocantes de nabos sobre base de masato cremoso.",
    price: "$18.99",
    image: "/tacacho-with-mixed-meats-beef-chicken-fish-colorfu.jpg",
    badge: "Más Popular",
    badgeColor: "bg-secondary",
  },
  {
    id: 2,
    name: "Tacacho de Champiñones",
    description:
      "Deliciosa variación vegetariana con champiñones frescos, hierbas aromáticas y nuestra tradicional base de masato.",
    price: "$15.99",
    image: "/tacacho-with-fresh-mushrooms-herbs-vegetarian-amaz.jpg",
    badge: "Vegetariano",
    badgeColor: "bg-green-500",
  },
  {
    id: 3,
    name: "Tacacho Ranchero",
    description:
      "Estilo ranchero con carne de res marinada, vegetales frescos y especias tradicionales de la región amazónica.",
    price: "$17.99",
    image: "/tacacho-ranchero-style-with-marinated-beef-fresh-v.jpg",
    badge: "Tradicional",
    badgeColor: "bg-primary",
  },
  {
    id: 4,
    name: "Tacacho Vegetariano",
    description:
      "Opción completamente vegetal con vegetales de temporada, legumbres y nuestra base cremosa de masato vegano.",
    price: "$14.99",
    image: "/vegetarian-tacacho-with-seasonal-vegetables-legume.jpg",
    badge: "Vegano",
    badgeColor: "bg-green-600",
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestras 4 Presentaciones</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cada variación de nuestro Tacacho Gourmet está cuidadosamente preparada para ofrecerte una experiencia
            culinaria única y auténtica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card">
              <div className="relative">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-64 object-cover" />
                <Badge className={`absolute top-4 left-4 ${item.badgeColor} text-white`}>{item.badge}</Badge>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-card-foreground">{item.name}</CardTitle>
                  <span className="text-2xl font-bold text-primary">{item.price}</span>
                </div>
                <CardDescription className="text-muted-foreground text-pretty">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Agregar al Pedido
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3">
            Ver Menú Completo
          </Button>
        </div>
      </div>
    </section>
  )
}
