import Hero from "../components/Hero";
import Projects from "@/components/Projects";
import Work from "../components/Work";
import Resume from "../components/Resume";
import { Instrument_Sans } from "next/font/google";
import About from "../components/About";
import Contact from "../components/Contact";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-main",
});

export default function Home() {
  return (
    <div>
      <title>Abdel Altarazi</title>
      <main className={`${instrumentSans.variable} font-main`}>
        <Hero />
        <Work />
        <Resume />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}
