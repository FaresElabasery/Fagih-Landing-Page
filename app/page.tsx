import AboutUs from "@/components/HomeSections/AboutUs/AboutUs";
import HeroSection from "@/components/HomeSections/HeroSection/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
      <HeroSection />
      <AboutUs />
    </div>
  );
}
