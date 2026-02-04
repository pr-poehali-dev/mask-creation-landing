import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ContentSections from "@/components/sections/ContentSections";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-light">
      <Header />
      <Hero />
      <ContentSections />
      <Footer />
    </div>
  );
};

export default Index;
