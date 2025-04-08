import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import LanguageSwitcher from "../components/LanguageSwitcher.jsx";

const SPREADSHEET_ID = import.meta.env.VITE_SPREADSHEET_ID;
const API_KEY = import.meta.env.VITE_API_KEY;
const SHEET_NAME = "polityka prywatnosci";

const PrivacyPolicy = () => {
  const { i18n, t } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(
        SHEET_NAME,
      )}?key=${API_KEY}`;
      const res = await fetch(url);
      const json = await res.json();

      if (!json.values || json.values.length < 2) return;

      const [header, ...rows] = json.values;
      const parsed = rows.map((row) => {
        const obj = {};
        row.forEach((val, idx) => {
          obj[header[idx]] = val;
        });
        return obj;
      });

      setData(parsed);
    };

    fetchPrivacyPolicy();
  }, []);

  // Grupowanie elementów wg sekcji
  const grouped = {};
  data.forEach((item) => {
    const section = item.section?.split(".")[0];
    if (!grouped[section]) grouped[section] = [];
    grouped[section].push(item);
  });

  const titleKey = i18n.language === "pl" ? "pl_title" : "en_title";
  const contentKey = i18n.language === "pl" ? "pl_content" : "en_content";

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Sekcja nagłówka z przełącznikiem języka po lewej i przyciskiem po prawej */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Przełącznik języka (z lewej strony) */}
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>

          {/* Przycisk powrotu do strony głównej (po prawej stronie) */}
          <div>
            <a
              href="/"
              className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {i18n.language === "pl"
                ? "Powrót do strony głównej"
                : "Return to the main page"}
            </a>
          </div>
        </div>
      </div>

      {/* Główna treść strony */}
      <div className="mx-auto max-w-3xl px-6 py-10 text-base leading-7 text-gray-700 lg:px-8">
        {/* Tytuł strony (np. Polityka Prywatności / Privacy Policy) */}
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {i18n.language === "pl" ? "Polityka Prywatności" : "Privacy Policy"}
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          {i18n.language === "pl"
            ? "Poniżej znajduje się treść polityki prywatności dla użytkowników."
            : "Below you will find the privacy policy content for users."}
        </p>

        {/* Sekcje z treścią (grupowane) */}
        {Object.entries(grouped).map(([sectionKey, items]) => (
          <div
            key={sectionKey}
            className="mt-8 rounded-lg bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-indigo-600">
              Sekcja {sectionKey}
            </h2>

            <ul role="list" className="space-y-6 text-gray-700">
              {items.map((item) => (
                <li className="flex gap-x-3" key={item.section}>
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <div>
                    {/* Tytuł (jeśli istnieje) */}
                    {item[titleKey] && (
                      <p className="font-medium text-gray-900">
                        {item[titleKey]}
                      </p>
                    )}
                    {/* Treść punktu */}
                    <p className="mt-1">{item[contentKey]}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
