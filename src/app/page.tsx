import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import FeaturedServices from "@/components/home/FeaturedServices";
import ServiceAreaPreview from "@/components/home/ServiceAreaPreview";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";
import HeroEntrance from "@/components/animations/HeroEntrance";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroEntrance>
          <Hero />
          <TrustBar />
        </HeroEntrance>
        <ServicesGrid />
        <FeaturedServices />
        <ServiceAreaPreview />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
