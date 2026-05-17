import Hero from "@/components/Hero";
import Petals from "@/components/Petals";
import Sparkles from "@/components/Sparkles";
import Intro from "@/components/Intro";
import Qualities from "@/components/Qualities";
import Quote from "@/components/Quote";
import Gallery from "@/components/Gallery";
import Travel from "@/components/Travel";
import Soiree from "@/components/Soiree";
import Letter from "@/components/Letter";
import Wishes from "@/components/Wishes";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 z-0">
        <Sparkles count={40} />
      </div>
      <Petals count={28} />

      <div className="relative z-10">
        <Hero />
        <Intro />
        <Qualities />
        <Quote />
        <Gallery />
        <Travel />
        <Soiree />
        <Letter />
        <Wishes />
        <Footer />
      </div>
    </main>
  );
}
