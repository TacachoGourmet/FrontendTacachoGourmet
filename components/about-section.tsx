export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-background wave-divider">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Tradición e Innovación Culinaria</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg text-pretty">
                <strong className="text-foreground">Tacacho Gourmet</strong> representa la evolución de un plato
                tradicional amazónico, generalmente originario de Perú, Colombia y Ecuador, transformado en una
                experiencia culinaria innovadora.
              </p>
              <p className="text-pretty">
                Nuestra principal ventaja radica en la <strong className="text-primary">combinación exclusiva</strong>{" "}
                de elementos: un relleno mixto de carne de res, pollo y pescado; láminas crocantes de nabos; y una base
                de masato cremoso.
              </p>
              <p className="text-pretty">
                Esta función transforma un plato tradicional en una experiencia culinaria innovadora y
                <strong className="text-secondary"> sin competencia directa</strong> en su nicho.
              </p>
              <p className="text-pretty">
                El fortalecimiento de la industria del tacacho gourmet no solo impulsa el desarrollo económico regional,
                sino que también{" "}
                <strong className="text-foreground">salvaguarda el patrimonio culinario colombiano</strong>.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/traditional-amazonian-kitchen-chef-preparing-tacac.jpg"
              alt="Preparación tradicional de Tacacho"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <p className="font-semibold text-lg">+50 años</p>
              <p className="text-sm">de tradición familiar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
