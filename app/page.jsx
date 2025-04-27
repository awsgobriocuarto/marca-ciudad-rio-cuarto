import BenefitsGrid from "./ui/BenefitsGrid";
import BrandExplanation from "./ui/BrandExplanation";
import CallToAction from "./ui/CallToAction";
import FloatingButton from "./ui/FloatingButton";
import Footer from "./ui/Footer";
import HeroSection from "./ui/HeroSection";
import Slides from "./ui/Slides";
import SuccessStoriesSlider from "./ui/SuccessStoriesSlider";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Slides />
      <BrandExplanation />
      <BenefitsGrid />
      <SuccessStoriesSlider />
      <CallToAction />
      <FloatingButton />
      <Footer />
    </main>
  );
}
