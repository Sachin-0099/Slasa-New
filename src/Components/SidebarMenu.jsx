import * as RouterDom from "react-router-dom";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const SideMenu = ({ isOpen, onClose, user }) => {
  const { t } = useTranslation();
  const menuRef = useRef(null);
  const [openSections, setOpenSections] = useState({});

  const toggleSection = useCallback((section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      className={`fixed top-0 left-0 w-[320px] h-screen bg-white shadow-lg overflow-y-auto transform transition-transform duration-300 z-50 text-base ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full text-gray-700 hover:bg-red-500 hover:text-white transition-all cursor-pointer shadow"
      >
        &#10006;
      </div>

      <div className="bg-[#3087D1] text-white px-6 py-8 rounded-b-xl font-bold">
        <h2>{t(`👨🏻 Hello ${user}`)}</h2>
      </div>

      <MenuSection title={t("Trending")}>
        <ExpandableMenu title={t("Best Sellers")} isOpen={openSections.sellers} toggle={() => toggleSection("sellers")}> 
          <MenuItem text={t("Top Rated by Customers")} link="/top-rated" />
          <MenuItem text={t("All-Time-Best-Seller")} link="/all-time" />
          <MenuItem text={t("Staff Pick")} link="/staff-pick" />
          <MenuItem text={t("Exclusive Online Offers")} link="/exclusive" />
        </ExpandableMenu>

        <ExpandableMenu title={t("Trending Products")} isOpen={openSections.products} toggle={() => toggleSection("products")}> 
          <MenuItem text={t("Flash Deals")} link="/flash" />
          <MenuItem text={t("Bundle Offers")} link="/bundle" />
          <MenuItem text={t("Clearance Sale")} link="/clearance" />
        </ExpandableMenu>

        <ExpandableMenu title={t("New Arrivals")} isOpen={openSections.arrivals} toggle={() => toggleSection("arrivals")}> 
          <MenuItem text={t("Handmade & Custom Creations")} link="/handmade" />
          <MenuItem text={t("Most Sold Items")} link="/most-sold" />
          <MenuItem text={t("Influencer Picks")} link="/influencer" />
          <MenuItem text={t("Back in Stock")} link="/back-in-stock" />
        </ExpandableMenu>

        <ExpandableMenu title={t("Customer Reviews")} isOpen={openSections.reviews} toggle={() => toggleSection("reviews")}> 
          <MenuItem text={t("Verified Customer Testimonials")} link="/verified" />
          <MenuItem text={t("Before & After Comparisons")} link="/comparisons" />
        </ExpandableMenu>
      </MenuSection>

      <MenuSection title={t("Shop")}>
        <ExpandableMenu title={t("Acrylic Accessories")} isOpen={openSections.acrylic} toggle={() => toggleSection("acrylic")}> 
          <MenuItem text={t("Acrylic sheets")} link="/sheets" />
          <MenuItem text={t("Acrylic Wood")} link="/mdf-wood" />
          <MenuItem text={t("Mdf Wood")} link="/wood" />
        </ExpandableMenu>

        <ExpandableMenu title={t("UV Printing Wall Art")} isOpen={openSections.UV} toggle={() => toggleSection("UV")}> 
          <MenuItem text={t("Custom Frames")} link="/frames" />
          <MenuItem text={t("Acrylic Prints")} link="/prints" />
          <MenuItem text={t("Wall Decor")} link="/wall-decor" />
          <MenuItem text={t("Canvas Art")} link="/canvas-art" />
          <MenuItem text={t("Decorative Panels")} link="/panels" />
        </ExpandableMenu>

        <ExpandableMenu title={t("Wood")} isOpen={openSections.Wood} toggle={() => toggleSection("Wood")}> 
          <MenuItem text={t("Wood Easel Canvas")} link="/wood-easel" />
          <MenuItem text={t("Wood Sheet")} link="/wood-sheet" />
          <MenuItem text={t("Wood Shelves")} link="/wood-shelves" />
          <MenuItem text={t("Customize Wood")} link="/customize-wood" />
          <MenuItem text={t("Wood Frame")} link="/wood-frame" />
          <MenuItem text={t("Ramadan & Eid Wood")} link="/ramadan" />
        </ExpandableMenu>

        <ExpandableMenu title={t("Neon")} isOpen={openSections.Neon} toggle={() => toggleSection("Neon")}> 
          <MenuItem text={t("Festival Neon")} link="/festival-neon" />
          <MenuItem text={t("Celebration Neon")} link="/celebration-neon" />
          <MenuItem text={t("Office & Event")} link="/office" />
          <MenuItem text={t("Customize")} link="/customize" />
        </ExpandableMenu>

        <ExpandableMenu title={t("Flowers & Plants")} isOpen={openSections.Flowers} toggle={() => toggleSection("Flowers")}> 
          <MenuItem text={t("Fresh Flowers")} link="/fresh" />
          <MenuItem text={t("Indoor Plants")} link="/indoor" />
          <MenuItem text={t("Limited Edition")} link="/limited-edition" />
          <MenuItem text={t("Outdoor Plants")} link="/outdoor" />
        </ExpandableMenu>
      </MenuSection>

      <MenuSection title={t("Services")}>
        <ExpandableMenu title={t("Photography & Videography")} isOpen={openSections.photography} toggle={() => toggleSection("photography")}> 
          <MenuItem text={t("Event Photography")} link="/event-photography" />
          <MenuItem text={t("Corporate Shoots")} link="/corporate" />
          <MenuItem text={t("Product Photography")} link="/product" />
          <MenuItem text={t("Promotional Videos")} link="/promotional" />
          <MenuItem text={t("Special Videography Services")} link="/Special-photography" />
        </ExpandableMenu>

        <ExpandableMenu title={t("Exhibition & Events")} isOpen={openSections.events} toggle={() => toggleSection("events")}> 
          <MenuItem text={t("Event Setup")} link="/event-setup" />
          <MenuItem text={t("Photography & Videography Setup")} link="/photography-setup" />
        </ExpandableMenu>

        <ExpandableMenu title={t("Other Services")} isOpen={openSections.others} toggle={() => toggleSection("others")}> 
          <MenuItem text={t("Vehicle Branding")} link="/vehicle-branding" />
          <MenuItem text={t("Safety Equipments")} link="/safety" />
          <MenuItem text={t("Lighting poles")} link="/lighting" />
          <MenuItem text={t("Banner")} link="/banner" />
          <MenuItem text={t("Solar Lights")} link="/solar-lights" />
          <MenuItem text={t("Flag Stand")} link="/flag-stand" />
          <MenuItem text={t("Street signs")} link="/Street-signs" />
          <MenuItem text={t("Led & Neon Signage")} link="/led" />
          <MenuItem text={t("Exbition stand")} link="/exhibition" />
          <MenuItem text={t("Merchanding stands")} link="/merchandising" />
          <MenuItem text={t("Flex Face Signage")} link="/flex" />
        </ExpandableMenu>
      </MenuSection>

      <MenuSection title={t("Help and Settings")}>
        <MenuItem text={t("Your Account")} link="/account" />
        <MenuItem text={t("Customer Section")} link="/customer" />
        <MenuItem text={t("Sign In")} link="/signIn" />
        <MenuItem text={t("Sign Up")} link="/signUp" />
      </MenuSection>
    </div>
  );
};

const ExpandableMenu = ({ title, isOpen, toggle, children }) => (
  <div className="mb-3">
    <div onClick={toggle} className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer font-medium">
      <span>{title}</span>
      {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
    </div>
    {isOpen && <div className="pl-6 border-l border-gray-200 space-y-1">{children}</div>}
  </div>
);

const MenuSection = ({ title, children }) => (
  <div className="px-4 py-5 border-b border-gray-200">
    <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
    {children}
  </div>
);

const MenuItem = ({ text, link }) => (
  <Link
    to={link}
    className="flex justify-between items-center px-3 py-2 rounded-md text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
  >
    <span>{text}</span>
    <span>➝</span>
  </Link>
);

export default SideMenu;
