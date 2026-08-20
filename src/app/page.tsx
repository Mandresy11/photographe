import Hero from "@/components/Hero";
import Prestations from "@/components/Prestations";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import Photographer from "@/components/Photographer";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Prestations />
      <HowItWorks />
      <Photographer />
      <Gallery />
      <Testimonials />
      <Faq />
    </main>
  );
}
