import React, { useState, useEffect } from "react";
import SideMenu from "./SidebarMenu";
import HeaderTop from "./HeaderTop";
import HeaderNav from "./HeaderNav";
import HeaderMain from "./HeaderMain";

const PageLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [hideHeaderTop, setHideHeaderTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll Y Position:", window.scrollY); // Debugging
      setHideHeaderTop(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen bg-white overflow-hidden">
      {/* Main Content Area */}
      <div
        className={`flex-grow flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "md:ml-0" : "ml-0"
        } overflow-x-hidden`}
      >
        {/* Header Section */}
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg transition-all duration-300">
          {!hideHeaderTop && <HeaderTop />}
          <HeaderNav />
          <HeaderMain />
        </div>

        {/* Page Content */}
        <div className="w-full px-4 md:px-6 lg:px-8 pt-[145px] mt-15 lg:mt-0 md:mt-2">
          {children}
        </div>
      </div>

      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-30 p-2 bg-gray-800 text-white rounded-full"
      >
        {isSidebarOpen ? "Close" : "Open"} Sidebar
      </button>
    </div>
  );
};

export default PageLayout;
