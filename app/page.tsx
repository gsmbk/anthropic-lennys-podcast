import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GuestsSection from "@/components/GuestsSection";
import CultureSection from "@/components/CultureSection";
import SkillsSection from "@/components/SkillsSection";
import ProductsSection from "@/components/ProductsSection";
import BooksSection from "@/components/BooksSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <GuestsSection />
      <CultureSection />
      <SkillsSection />
      <ProductsSection />
      <BooksSection />
      <Footer />
    </main>
  );
}
