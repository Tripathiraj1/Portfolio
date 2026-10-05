import About from "@/components/About";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import DynamicBackground from "@/components/DynamicBackground";
import EngineeringCore from "@/components/EngineeringCore";
import Gallery from "@/components/Gallery";
import Hero from "@/components/HeroSection";
import Journey from "@/components/Journey";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Loader />
      <DynamicBackground />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Journey />
        <EngineeringCore />
        <Gallery />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
