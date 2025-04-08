import { useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import LanguageSwitcher from "../components/LanguageSwitcher.jsx";
import { useTranslation } from "react-i18next";

const SPREADSHEET_ID = import.meta.env.VITE_SPREADSHEET_ID;
const API_KEY = import.meta.env.VITE_API_KEY;
const SHEET_NAME = "regulamin";

export default function Regulations() {
  const { i18n, t } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchRegulationData = async () => {
      try {
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
      } catch (error) {
        console.error("Błąd podczas pobierania danych z Google Sheets:", error);
      }
    };

    fetchRegulationData();
  }, []);

  const contentKey = i18n.language === "pl" ? "pl_content" : "en_content";

  const pageTitle =
    i18n.language === "pl"
      ? "REGULAMIN TCM KONGRES KRAKÓW 2023"
      : "TERMS AND CONDITIONS OF TCM CONGRESS KRAKOW 2023";

  const backToHomeLabel =
    i18n.language === "pl" ? "Powrót do strony głównej" : "Return to Homepage";

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <LanguageSwitcher />

          <div>
            <a
              href="/"
              className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {backToHomeLabel}
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-10 text-base leading-7 text-gray-700 lg:px-8">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {pageTitle}
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          {i18n.language === "pl"
            ? "Poniżej znajduje się Regulamin Kongresu."
            : "Below you will find the Congress Terms and Conditions."}
        </p>

        <div className="mt-10">
          <ul role="list" className="space-y-8 text-gray-600">
            {data.map((item) => (
              <li className="flex gap-x-3" key={item.section}>
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  {item.section && (
                    <strong className="font-semibold text-gray-900 mr-1">
                      {item.section}.
                    </strong>
                  )}
                  {item[contentKey]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
