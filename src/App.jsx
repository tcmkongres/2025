import  { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Downloads from "./pages/Downloads";
import Speaker from "./pages/Speaker";
import { initializeI18n } from "./i18n";
function App() {


    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        initializeI18n().then(() => {
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <div>Ładowanie tłumaczeń...</div>;
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route path="/privacy" element={<PrivacyPolicy />} />*/}
            {/*<Route path="/terms" element={<Terms />} />*/}
            {/*<Route path="/downloads" element={<Downloads />} />*/}
            {/*<Route path="/speaker/:id" element={<Speaker />} />*/}
        </Routes>
    );
}
export default App;
