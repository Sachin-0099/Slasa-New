import "./i18n.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import i18n configuration


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
      </I18nextProvider>,
    </StrictMode>
  </BrowserRouter>
);
