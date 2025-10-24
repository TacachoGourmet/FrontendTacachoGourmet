import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { ValuesSection } from "@/components/values-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ValuesSection />
      <Footer />
    </main>
  )
}
