import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TestimonialSection from "../components/TestimonialSection";
import Projects from "@/components/Projects";
import Work from "../components/Work";
import Resume from "../components/Resume";
import { Inter, Instrument_Sans } from "next/font/google";
import About from "../components/About";
import Contact from "../components/Contact";
// import PricingSection from '../components/PricingSection';
// import CTASection from '../components/CTASection';
// import Footer from '../components/Footer';

const inter = Inter({ subsets: ["latin"], variable: "--font-main" });
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-main",
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abdel Altarazi</title>
        <meta name="description" content="Fullstack Engineer" />
      </Head>

      {/* <Header /> */}

      <main className={`${instrumentSans.variable} font-main`}>
        <Hero />
        <Work />
        <Resume />
        <Projects />
        <About />
        <Contact />

        {/* <TestimonialSection /> */}
        {/* <PricingSection />
        <CTASection /> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}
