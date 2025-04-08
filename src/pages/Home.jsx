import { useTranslation } from "react-i18next";
import HeroSection from "./HeroSection.jsx";
// import AboutSection from "./AboutSection.jsx";
import TcmSection from "./TcmSection.jsx";
import ImageSection from "./ImageSection.jsx";
import SpeakersSection from "./SpeakersSection.jsx";
import PricingSection from "./PricingSection.jsx";
import QuestionsSection from "./QuestionsSection.jsx";
import CalenderSection from "./CalenderSection.jsx";
import HotelSection from "./HotelSection.jsx";
import SponsorsSection from "./SponsorsSection.jsx";
import Footer from "./Footer.jsx";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="bg-white">
      <HeroSection />
      <main className="isolate">
        <TcmSection />
        <ImageSection />
        <SpeakersSection />
        <CalenderSection />
        <PricingSection />
        <QuestionsSection />
        <HotelSection />
        <SponsorsSection />
      </main>

      <Footer />
      {/*<AboutSection />*/}
    </div>
  );
}

export default Home;
