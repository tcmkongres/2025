import { useTranslation } from "react-i18next";
import HeroSection from "./HeroSection.jsx";

function Home() {
    const { t } = useTranslation();
    return (
        <div>
            <HeroSection />
            {/*<AboutSection />*/}
            {/*<SpeakersSection />*/}
            {/*<ScheduleSection />*/}
            {/*<HotelSection />*/}
            {/*<PastEditionsSection />*/}
            {/*<TicketsSection />*/}
            {/*<FAQSection />*/}
            {/*<OrganizerSection />*/}
            {/*<MainPartnerSection />*/}
            {/*<PartnersSection />*/}
            {/*<ContactSection />*/}
            {/*<FooterSection />*/}
        </div>
    );
}

// const HeroSection = () => <div className="h-screen bg-gray-100">Hero</div>;
const AboutSection = () => <div>O nas</div>;
const SpeakersSection = () => <div>Wykładowcy</div>;
const ScheduleSection = () => <div>Program wykładów</div>;
const HotelSection = () => <div>Hotel</div>;
const PastEditionsSection = () => <div>Poprzednie edycje</div>;
const TicketsSection = () => <div>Zakup biletu</div>;
const FAQSection = () => <div>Pytania</div>;
const OrganizerSection = () => <div>Organizator</div>;
const MainPartnerSection = () => <div>Partner główny</div>;
const PartnersSection = () => <div>Partnerzy</div>;
const ContactSection = () => <div>Kontakt</div>;
const FooterSection = () => <div>Stopka</div>;

export default Home;