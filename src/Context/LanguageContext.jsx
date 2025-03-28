import React, { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const [dir, setDir] = useState(language === "ar" ? "rtl" : "ltr");

  const changeLanguage = (lng) => {
    setLanguage(lng);
    localStorage.setItem("language", lng);

    const newDir = lng === "ar" ? "rtl" : "ltr";
    setDir(newDir);
    document.documentElement.setAttribute("dir", newDir);
  };

  useEffect(() => {
    const initialDir = language === "ar" ? "rtl" : "ltr";
    setDir(initialDir);
    document.documentElement.setAttribute("dir", initialDir);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, dir, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
