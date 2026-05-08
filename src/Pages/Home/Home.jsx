import ContactSection from "./Sections/ContactSection";
import HeroSection from "./Sections/HeroSection";
import ProfessionalCareSection from "./Sections/ProfessionalCareSection";
import ServicesSection from "./Sections/ServicesSection";
import TestimonialsSection from "./Sections/TestimonialsSection";

const Home = () => {
  return (
    <main className="min-h-screen bg-white text-nu20">
      <HeroSection />
      <ServicesSection />
      <ProfessionalCareSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default Home;
