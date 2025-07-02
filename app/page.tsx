import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import FeaturesSection from "@/components/FeaturesSection"
import ExpertSection from "@/components/ExpertSection"
import PlanSection from "@/components/PlanSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import FAQSection from "@/components/FAQSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import ContactForm from "../components/contactform"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ExpertSection />
        <PlanSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactForm />
        <CTASection />
        
      </main>
      <Footer />
    </div>
  )
}
