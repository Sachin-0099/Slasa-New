import * as RouterDom from "react-router-dom";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const SideMenu = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    const [firstName, setFirstName] = useState("");
      const [forceUpdate, setForceUpdate] = useState(0); // Used to force re-render
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  const menuRef = useRef(null);
  const [openSections, setOpenSections] = useState({});

  const toggleSection = useCallback((section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");

    setIsLoggedIn(false);
    setFirstName("");

    // ✅ Dispatch event to update all components
    window.dispatchEvent(new Event("authChange"));
  };

  const checkAuthStatus = () => {
    const storedUser = localStorage.getItem("user");
    const authToken = localStorage.getItem("authToken");

    if (storedUser && authToken) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setFirstName(parsedUser.firstname || "User");
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkAuthStatus(); // Initial check

    // ✅ Listen for authChange events from SignIn
    const handleAuthChange = () => {
      checkAuthStatus();
    };

    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
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
      style={{
        ...styles.sideMenu,
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
      }}
      className="text-2xl"
    >
      <div style={styles.closeButton} onClick={onClose}>
        &#10006;
      </div>
      <div style={styles.header}>
      <h2>👨🏻 Hello, {firstName ? firstName : "User"}</h2>
      </div>

      <MenuSection title={t("Trending")} className="text-xl">
        <ExpandableMenu
          title={t("Best Sellers")}
          isOpen={openSections.sellers}
          toggle={() => toggleSection("sellers")}
        >
          <MenuItem text={t("Top Rated by Customers")} link="/top-rated" />
          <MenuItem text={t("All-Time-Best-Seller")} link="/all-time" />
          <MenuItem text={t("Staff Pick")} link="/staff-pick" />
          <MenuItem text={t("Exclusive Online Offers")} link="/exclusive" />
        </ExpandableMenu>
        <ExpandableMenu
          title={t("Trending Products")}
          isOpen={openSections.products}
          toggle={() => toggleSection("products")}
        >
          <MenuItem text={t("Flash Deals")} link="/flash" />
          <MenuItem text={t("Bundle Offers")} link="/bundle" />
          <MenuItem text={t("Clearance Sale" )} link="/clearance" />
        </ExpandableMenu>
        <ExpandableMenu
          title={t("New Arrivals")}
          isOpen={openSections.arrivals}
          toggle={() => toggleSection("arrivals")}
        >
          <MenuItem text={t("Handmade & Custom Creations")} link="/handmade" />
          <MenuItem text={t("Most Sold Items")} link="/most-sold" />
          <MenuItem text={t("Influencer Picks")} link="/influencer" />
          <MenuItem text={t("Back in Stock")} link="/back-in-stock" />
        </ExpandableMenu>
        <ExpandableMenu
          title={t("Customer Reviews")}
          isOpen={openSections.reviews}
          toggle={() => toggleSection("reviews")}
        >
          <MenuItem text={t("Verified Customer Testimonials")} link="/verified" />
          <MenuItem text={t("Before & After Comparisons")} link="/comparisons" />

        </ExpandableMenu>
      </MenuSection>

      <MenuSection title={t("Shop")}>
        <ExpandableMenu
          title={t("Acrylic Accessories")}
          isOpen={openSections.acrylic}
          toggle={() => toggleSection("acrylic")}
        >
          <MenuItem text={t("Acrylic sheets")} link="/sheets" />

          <MenuItem text={t("Acrylic Wood")} link="/mdf-wood" />
          <MenuItem text={t("Mdf Wood")} link="/wood" />
        </ExpandableMenu>

        <ExpandableMenu
          title={t("UV Printing Wall Art")}
          isOpen={openSections.UV}
          toggle={() => toggleSection("UV")}
        >
          <MenuItem text={t("Custom Frames")} link="/frames" />
          <MenuItem text={t("Acrylic Prints")} link="/prints" />
          <MenuItem text={t("Wall Decor")} link="/wall-decor" />
          <MenuItem text={t("Canvas Art")} link="/canvas-art" />
          <MenuItem text={t("Decorative Panels")} link="/panels" />
        </ExpandableMenu>

        <ExpandableMenu
          title={t("Wood")}
          isOpen={openSections.Wood}
          toggle={() => toggleSection("Wood")}
        >
          <MenuItem text={t("Wood Easel Canvas")} link="/wood-easel" />
          <MenuItem text={t("Wood Sheet")} link="/wood-sheet" />
          <MenuItem text={t("Wood Shelves")} link="/wood-shelves" />
          <MenuItem text={t("Customize Wood")} link="/customize-wood" />
          <MenuItem text={t("Wood Frame")} link="/wood-frame" />
          <MenuItem text={t("Ramadan & Eid Wood")} link="/ramadan" />
        </ExpandableMenu>
        <ExpandableMenu
          title={t("Neon")}
          isOpen={openSections.Neon}
          toggle={() => toggleSection("Neon")}
        >
          <MenuItem text={t("Festival Neon")} link="/festival-neon" />
          <MenuItem text={t("Celebration Neon")} link="/celebration-neon" />
          <MenuItem text={t("Office & Event")} link="/office" />
          <MenuItem text={t("Customize")} link="/customize" />
        </ExpandableMenu>

        <ExpandableMenu
          title={t("Flowers & Plants")}
          isOpen={openSections.Flowers}
          toggle={() => toggleSection("Flowers")}
        >
          <MenuItem text={t("Fresh Flowers")} link="/fresh" />
          <MenuItem text={t("Indoor Plants")} link="/indoor" />
          <MenuItem text={t("Limited Edition")} link="/limited-edition" />
          <MenuItem text={t("Outdoor Plants")} link="/outdoor" />
        </ExpandableMenu>
      </MenuSection>

      <MenuSection title={t("Services")}>
       
        <ExpandableMenu
          title={t("Photography & Videography")}
          isOpen={openSections.photography}
          toggle={() => toggleSection("photography")}
        >
          <MenuItem text={t("Event Photography")} link="/event-photography" />
          <MenuItem text={t("Corporate Shoots")} link="/corporate" />
          <MenuItem text={t("Product Photography")} link="/product" />
          <MenuItem text={t("Promotional Videos")} link="/promotional" />
          <MenuItem text={t("Special Videography Services")} link="/Special-photography" />
        </ExpandableMenu>
        <ExpandableMenu
          title={t("Exhibition & Events")}
          isOpen={openSections.events}
          toggle={() => toggleSection("events")}
        >
          <MenuItem text={t("Event Setup")} link="/event-setup" />
          <MenuItem
            text={t("Photography & Videography Setup")}
            link="/photography-setup"
          />
        </ExpandableMenu>
      
        <ExpandableMenu
          title={t("Other Services")}
          isOpen={openSections.others}
          toggle={() => toggleSection("others")}
        >
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
        {isLoggedIn ? (
          <button onClick={handleLogout} >
            <MenuItem text={t("Log Out")} link="/" />
          </button>
      ) : (
        <div className="flex flex-col space-y-2 mt-4">
          <MenuItem text={t("Sign In")} link="/signIn" />
          <MenuItem text={t("Sign Up")} link="/signUp" />
        </div>
      )}
      </MenuSection>
    </div>
  );
};

const ExpandableMenu = ({ title, isOpen, toggle, children }) => {


return (
  <div style={styles.expandableMenu}>
    <div style={styles.menuItem} onClick={toggle}>
      <span style={styles.menuText}>{title}</span>
      <span style={styles.menuArrow}>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </span>
    </div>
    {isOpen && <div style={styles.subMenu}>{children}</div>}
  </div>
);

};

const MenuSection = ({ title, children }) => {
  return (
    <div style={styles.menuSection}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

const MenuItem = ({ text, link }) => {
  return (
    <Link to={link} style={styles.menuItem} className="menu-item">
      <span style={styles.menuText}>{text}</span>
      <span style={styles.menuArrow}>➝</span>
    </Link>
  );
};

const styles = {
  sideMenu: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "320px",
    height: "100vh",
    backgroundColor: "#fff",
    boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
    overflowY: "auto",
    transition: "transform 0.3s ease-in-out",
    padding: "10px 15px",
    zIndex: 100,
  },
  closeButton: {
    position: "absolute",
    top: "5px",
    right: "0px",
    backgroundColor: "#fff",
    padding: "8px 12px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    textAlign: "center",
    border: "none",
    borderRadius: "5px",
    transition: "all 0.3s ease",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
    color: "#333",

    "&:hover": {
      backgroundColor: "!#3087d1",
      color: "#3087d1",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
      transform: "scale(1.05)",
    },

    "&:active": {
      transform: "scale(0.95)",
      boxShadow: "none",
    },
  },
  header: {
    backgroundColor: "#3087D1",
    color: "#fff",
    padding: "30px",
    borderRadius: "8px",
    fontWeight: "bold",
  },
  menuSection: {
    padding: "15px 0",
    borderBottom: "1px solid #ddd",
  },
  menuItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px",
    fontSize: "14px",
    color: "#333",
    textDecoration: "none",
    cursor: "pointer",
    borderRadius: "5px",
    border: "1px solid transparent",
    transition: "0.2s",
  },
  expandableMenu: {
    marginBottom: "10px",
  },
  subMenu: {
    paddingLeft: "15px",
    borderLeft: "2px solid #ddd",
  },
  menuText: {
    flex: 1,
  },
  menuArrow: {
    transition: "transform 0.2s ease-in-out",
  },
};

export default SideMenu;
