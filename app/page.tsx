import AboutUs from "@/components/HomeSections/AboutUs/AboutUs";
import HeroSection from "@/components/HomeSections/HeroSection/HeroSection";
import News from "@/components/HomeSections/News/News";
import Partners from "@/components/HomeSections/Partners/Partners";
import Projects from "@/components/HomeSections/Projects/Projects";
import Services from "@/components/HomeSections/Services/Services";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <AboutUs />
      <Services />
      <Projects />
      <News />
      <Partners />
    </div>
  );
}
