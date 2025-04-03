import "./i18n.js";
import { Provider } from "react-redux";


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import i18n configuration
import store from "./redux/store.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
  <BrowserRouter>
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </StrictMode>
  </BrowserRouter>
  </Provider>
);

// Delay to ensure React rendering is done
