import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Trust from "@/components/Trust"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import Process from "@/components/Process"
import TechStack from "@/components/TechStack"
import Results from "@/components/Results"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"

export default function Home() {
  return (
    <div className="animate-fade-in" style={{ animationFillMode: "both" }}>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Projects />
        <Process />
        <TechStack />
        <Results />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
