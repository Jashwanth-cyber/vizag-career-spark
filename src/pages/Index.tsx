import { HeroSection } from "@/components/ui/hero-section";
import { AboutSection } from "@/components/ui/about-section";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { HowItWorks } from "@/components/ui/how-it-works";
import { Testimonials } from "@/components/ui/testimonials";
import { EventsSection } from "@/components/ui/events-section";
import { FAQSection } from "@/components/ui/faq-section";
import { RegistrationForm } from "@/components/ui/registration-form";
import { Footer } from "@/components/ui/footer";

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
