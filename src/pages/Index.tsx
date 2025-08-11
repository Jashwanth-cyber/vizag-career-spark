import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { EventsSection } from "@/components/sections/EventsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { RegistrationForm } from "@/components/sections/RegistrationForm";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <HowItWorks />
      <Testimonials />
      <EventsSection />
      <FAQSection />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Index;
