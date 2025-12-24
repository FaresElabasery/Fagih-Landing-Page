import AboutUs from "@/components/HomeSections/AboutUs/AboutUs";
import HeroSection from "@/components/HomeSections/HeroSection/HeroSection";
import Projects from "@/components/HomeSections/Projects/Projects";
import Services from "@/components/HomeSections/Services/Services";

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
      <HeroSection />
      <AboutUs />
      <Services />
      <Projects />
    </div>
  );
}
