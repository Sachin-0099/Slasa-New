import React from 'react';
import '../App.css'; // For any custom CSS, though Tailwind handles most styling
import { useTranslation } from "react-i18next";

const HeaderMain = () => {
  const { t } = useTranslation();
  return (
    <div className="App  mt-[-10px]">
      <nav className="navbar border  border-gray-500 bg-white p-2">
        <div className="flex justify-start space-x-4 py-2 overflow-x-auto no-scrollbar">
          {/* Category 1 */}
          <div className="flex-shrink-0 px-3 border-l-2  h-full">
            <a href="/acrylic" className="text-black text-base sm:text-sm">{t("Acrylic Accessories")}</a>
          </div>
          {/* Category 2 */}
          <div className="flex-shrink-0 px-3 border-l-2 border-black h-full">
            <a href="/shop" className="text-black text-base sm:text-sm">{t("Shop")}</a>
          </div>
          {/* Category 3 */}
          {/* <div className="flex-shrink-0 px-3 border-l-2 border-black h-full">
            <a href="/photography" className="text-black text-base sm:text-sm">{t("Photography & VideoGraphy")}</a>
          </div> */}
          {/* Category 4 */}
          <div className="flex-shrink-0 px-3 border-l-2 border-black h-full">
            <a href="others" className="text-black text-base sm:text-sm">{t("Other Services")}</a>
          </div>
          {/* Add more categories if necessary */}
        </div>
      </nav>
    </div>
  );
};

export default HeaderMain;
