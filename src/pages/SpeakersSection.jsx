import Pokrywka from "../assets/Pokrywka.jpeg";
import Olszowska from "../assets/Olszowska.jpeg";
import Lapa from "../assets/Lapa.png";
import Brejecka from "../assets/Brejecka.png";
import Chmielnicki from "../assets/Chmielnicki.png";
import Maimon from "../assets/Maimon.png";
import Ayal from "../assets/Ayal.png";
import Teixeira from "../assets/Teixeira.png";
import Jie from "../assets/Jie.png";
import Montakab from "../assets/Montakab.jpeg";
import Baik from "../assets/Baik.jpg";
import Mietka from "../assets/Mietka.png";
import Wojniusz from "../assets/Wojniusz.jpg";
import Kalmus from "../assets/Kalmus.jpg";
import { useTranslation } from "react-i18next";

const team = [
  // {
  //   name: "Michael Foster",
  //   role: "Co-Founder / CTO",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  // },
  {
    name: "Katarzyna Pokrywka",
    imageUrl: Pokrywka,
    // url: "/pokrywka",
  },
  {
    name: "Bożena Olszowska",
    imageUrl: Olszowska,
    // url: "/olszowska",
  },
  {
    name: "Dorota Łapa",
    imageUrl: Lapa,
    // url: "/lapa",
  },
  {
    name: "Joanna Brejecka-Pamungkas",
    imageUrl: Brejecka,
    // url: "/brejecka",
  },
  {
    name: "Bartosz Chmielnicki",
    imageUrl: Chmielnicki,
    // url: "/chmielnicki",
  },
  {
    name: "Yair Maimon",
    imageUrl: Maimon,
    // url: "/maimon",
  },
  {
    name: "Rani Ayal",
    imageUrl: Ayal,
    // url: "/ayal",
  },
  {
    name: "Ricardo Teixeira",
    imageUrl: Teixeira,
    // url: "/teixeira",
  },
  {
    name: "Prof. Li Jie",
    imageUrl: Jie,
    // url: "/jie",
  },
  {
    name: "Hamid Montakab",
    imageUrl: Montakab,
    // url: "/montakab",
  },
  {
    name: "Jong Kook Baik",
    imageUrl: Baik,
    // url: "/baik",
  },
  {
    name: "Izabela Miętka",
    imageUrl: Mietka,
    // url: "/mietka",
  },
  {
    name: "Marta Nizioł-Wojniusz",
    imageUrl: Wojniusz,
    url: "/wojniusz",
  },
  {
    name: "Dr Marek Kalmus",
    imageUrl: Kalmus,
    url: "/kalmus",
  },
];

const speakersKey = {
  title: "speakers-key-section-title",
  description: "speakers-key-section-description",
};

const SpeakersSection = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          {t(speakersKey.title)}
        </h2>
        <p className="mt-6 text-lg/8 text-gray-600">
          {t(speakersKey.description)}
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-4"
      >
        {team.map((person) => (
          <li key={person.name}>
            <img
              alt=""
              src={person.imageUrl}
              className="mx-auto size-30 rounded-full"
            />
            <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
              {person.name}
            </h3>
            <p className="text-sm/6 text-gray-600">{person.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpeakersSection;
