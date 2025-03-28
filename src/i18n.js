import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./locales/translations";

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en", // Set default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
