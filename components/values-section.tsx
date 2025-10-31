import { Heart, Users, Sparkles, Leaf, Lightbulb, LucideIcon } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Responsabilidad Social",
    description: "Apoyamos a productores locales",
  },
  {
    icon: Heart,
    title: "Pasión por la Gastronomía",
    description: "Cada plato es preparado con amor y dedicación",
  },
  {
    icon: Users,
    title: "Respeto por la Tradición",
    description: "Preservamos las técnicas ancestrales",
  },
  {
    icon: Sparkles,
    title: "Compromiso con el Cliente",
    description: "Tu satisfacción es nuestra prioridad",
  },
];

// 3. Divide el array en dos: para la columna izquierda y la derecha.
const leftValues = values.slice(0, 2);
const rightValues = values.slice(2, 5);

// Componente para renderizar cada tarjeta de valor (para no repetir código)
function ValueCard({ icon: Icon, title, description, className = "" }: {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={`max-w-[280px] ${className}`}>
      {/* contenedor con altura mínima y stretch para que todas las tarjetas queden iguales */}
      <div className="p-6 rounded-xl bg-white/70 backdrop-blur-md shadow-xl border border-primary hover:bg-white/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 group cursor-pointer h-full min-h-[180px] flex flex-col">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <Icon size={24} />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-primary mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ValuesSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros Valores
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Los principios que guían cada aspecto de nuestra cocina y servicio,
            desde la selección de ingredientes hasta la experiencia del cliente.
          </p>
        </div>

        {/* --- Nuevas tarjetas: Visión y Misión (justo debajo de la descripción) --- */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <ValueCard
            icon={Lightbulb}
            title="Visión"
            description="Ser reconocidos como líderes en la gastronomía fusión amazónica, destacando por nuestra creatividad, calidad y compromiso con la tradición. Aspiramos a expandir nuestra presencia a nivel nacional e internacional, convirtiendo el Tacacho Gourmet en un símbolo de innovación y orgullo cultural."
            className="text-center max-w-[420px] h-[360px]"
          />
          <ValueCard
            icon={Sparkles}
            title="Misión"
            description="Ofrecemos una experiencia gastronómica única que fusiona la autenticidad de la tradición amazónica con innovación gourmet, utilizando ingredientes frescos y técnicas modernas. Nuestro objetivo es deleitar a los comensales con sabores excepcionales, promover la cultura culinaria amazónica y contribuir al desarrollo sostenible de las comunidades locales."
            className="text-center max-w-[420px] h-[360px]"
          />
        </div>

        {/* 4. Contenedor principal con Flexbox */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-32 gap-y-16">
          {/* Columna Izquierda */}
          <div className="flex flex-col gap-12">
            {leftValues.map((value, index) => (
              <ValueCard
                key={index}
                {...value}
                // Alineación a la izquierda en pantallas grandes
                className="text-center md:text-center"
              />
            ))}
          </div>

          {/* Plato central */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 order-first md:order-none shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl scale-110"></div>
            <img
              src="/delicious-traditional-amazonian-tacacho-dish-with-.jpg"
              alt="Tacacho Gourmet Central"
              className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white z-10"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-primary/10 z-20"></div>
          </div>

          {/* Columna Derecha */}
          <div className="flex flex-col gap-12">
            {rightValues.map((value, index) => (
              <ValueCard
                key={index}
                {...value}
                // Alineación a la izquierda en pantallas grandes
                className="text-center md:text-center"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
