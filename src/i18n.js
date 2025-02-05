import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const SPREADSHEET_ID = import.meta.env.VITE_SPREADSHEET_ID;
const API_KEY = import.meta.env.VITE_API_KEY;
const SHEET_NAME = import.meta.env.VITE_SHEET_NAME;


const fetchTranslations = async () => {
    try {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        if (!data.values) throw new Error("Brak danych w arkuszu");

        let translations = { en: {}, pl: {} };
        data.values.slice(1).forEach(([key, en, pl]) => {
            translations.en[key] = en;
            translations.pl[key] = pl;
        });

        return translations;
    } catch (error) {
        console.error("Błąd podczas pobierania tłumaczeń:", error);
        return { en: {}, pl: {} };
    }
};

const initializeI18n = async () => {
    const translations = await fetchTranslations();

    await i18n.use(initReactI18next).init({
        resources: {
            en: { translation: translations.en },
            pl: { translation: translations.pl },
        },
        lng: "pl",
        fallbackLng: "en",
        interpolation: { escapeValue: false },
    });
};

export { initializeI18n };
