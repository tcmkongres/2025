const values = [
  {
    name: "Gdzie odbędzie się wydarzenie związane z medycyną chińską w Krakowie?",
    description:
      "Wydarzenie odbędzie się w Hotelu Galaxy ul. Gęsia 22A 31-535 Krakow",
  },
  {
    name: "Kiedy odbędzie się to wydarzenie?",
    description:
      "Wydarzenie odbędzie się w dniach 13-15 października 2023 r. Szczegółowy harmonogram wydarzenia znajdziesz na naszej stronie internetowej.",
  },
  {
    name: "Jak mogę się zarejestrować na wydarzenie?",
    description:
      "Aby się zarejestrować, należy kupić bilet dostępny na stronie internetowej wydarzenia. Po zakupie biletu, otrzymasz potwierdzenie rejestracji na podany adres e-mail.",
  },
  {
    name: "Czy na miejscu będzie możliwość zakupu biletów?",
    description:
      "O ile wydarzenie nie zostanie wcześniej wyprzedane, bilety będzie można nabyć na miejscu w dniu rozpoczęcia wydarzenia. Zalecamy jednak wcześniejszy zakup biletu, aby zapewnić sobie miejsce.",
  },
  {
    name: "Czy na wydarzeniu będą tłumaczenia na język polski?",
    description:
      "Tak, podczas wydarzenia wszystkie anglojęzyczne wykłady będą tłumaczone na język polski",
  },
  {
    name: "Kto jest organizatorem wydarzenia?",
    description:
      "Organizatorami wydarzenia jest Polskie Towarzystwo Tradycyjnej Medycyny Chińskiej, którego celem jest propagowanie Tradycyjnej Medycyny Chińskiej oraz rozpowszechnianie i wspieranie stosowania zdobyczy naukowych w zakresie profilaktyki, diagnostyki, dietetyki, akupunktury, akupresury, masażu, baniek, ćwiczeń ruchowych Qi-Kung i farmakologii Tradycyjnej Medycyny Chińskiej oraz szerzenie postępu w tej dziedzinie.,",
  },
];

const QuestionsSection = () => {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Najczęściej zadawane pytania?
        </h2>
        <p className="mt-6 text-lg/8 text-gray-600">
          Masz jakieś pytanie lub chcesz dowiedzieć się czegoś więcej? Napisz do
          nas na adres tcmkongres.kontakt@gmail.com.Odpowiemy najszybciej jak to
          możliwe. Poniżej zebraliśmy najczęściej zadawane pytania.
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {values.map((value) => (
          <div key={value.name}>
            <dt className="font-semibold text-gray-900">{value.name}</dt>
            <dd className="mt-1 text-gray-600">{value.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default QuestionsSection;
