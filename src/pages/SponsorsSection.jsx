import jpg1 from "../assets/exhibitors/acuart_yb_logo_02.jpg";
import jpg2 from "../assets/exhibitors/logo-wystawcy.png";
import jpg3 from "../assets/exhibitors/logo cmc.jpg";
import jpg4 from "../assets/exhibitors/logoTOMO.jpg";
import jpg5 from "../assets/exhibitors/logo OP szkola naturalnego NEW-09.jpg";
import jpg6 from "../assets/exhibitors/Delewin logotyp.png";
import jpg7 from "../assets/exhibitors/TCM BOHEMIA_PNG.png";
import jpg8 from "../assets/exhibitors/TCMsklep-logo-czerwone-800x133px.png";
import { useTranslation } from "react-i18next";

const logos = [jpg1, jpg2, jpg3, jpg4, jpg5, jpg6, jpg7, jpg8];

const sponsorsKey = {
  title: "sponsors-key-section-title",
};

const SponsorsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="relative isolate -z-10 mt-32 sm:mt-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900 mb-8">
          {t(sponsorsKey.title)}
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll space-x-12 w-max">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[200px] h-[80px] flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        `}
      </style>
    </div>
  );
};

export default SponsorsSection;
