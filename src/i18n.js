import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "What do you want?": "What do you want?",
      "Sign Up / Sign In": "Sign Up / Sign In",
      "Acrylic": "Acrylic",
      "Shops": "Shops",
      "Photography & Videography": "Photography & Videography"
    }
  },
  hi: {
    translation: {
      "What do you want?": "आप क्या चाहते हैं?",
      "Sign Up / Sign In": "साइन अप / साइन इन",
      "Acrylic": "एक्रिलिक",
      "Shops": "दुकानें",
      "Photography & Videography": "फोटोग्राफी और वीडियोग्राफी"
    }
  },
  fr: {
    translation: {
      "What do you want?": "Que voulez-vous?",
      "Sign Up / Sign In": "S'inscrire / Se connecter",
      "Acrylic": "Acrylique",
      "Shops": "Magasins",
      "Photography & Videography": "Photographie & Vidéographie"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
