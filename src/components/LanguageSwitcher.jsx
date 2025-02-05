import { useTranslation } from "react-i18next";
import "../i18n.js";
const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    return (
        <div>
            <button onClick={() => i18n.changeLanguage("en")}>🇬🇧 English</button>
            <button onClick={() => i18n.changeLanguage("pl")}>🇵🇱 Polski</button>
        </div>
    );
};

export default LanguageSwitcher;