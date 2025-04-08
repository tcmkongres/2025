import hotel from "../assets/hotel1.jpg";
import { useTranslation } from "react-i18next";

const hotelKey = {
  title: "hotel-key-section-title",
  description: "hotel-key-section-description",
  hotel: "hotel-key-section-hotel",
  booking: "hotel-key-section-booking",
};

const reservationLinks = [
  {
    label: hotelKey.hotel,
    href: "https://www.qubushotel.com/pl/hotel-krakow/",
  },
  {
    label: hotelKey.booking,
    href: "https://www.booking.com/Share-sWPaV28",
  },
];

const HotelSection = () => {
  const { t } = useTranslation();
  return (
    <div className="relative isolate -z-10 mt-32 sm:mt-40">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
          <img
            alt=""
            src={hotel}
            className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
          />
          <div className="w-full flex-auto">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              {t(hotelKey.title)}
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-800">
              {t(hotelKey.description)}
            </p>
            <div className="mt-10 space-y-4">
              {reservationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm/6 font-semibold text-indigo-600 hover:underline"
                >
                  {t(link.label)} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
          className="aspect-1318/752 w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
        />
      </div>
    </div>
  );
};

export default HotelSection;
