import * as RouterDom from "react-router-dom";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";

const SideMenu = ({ isOpen, onClose }) => {
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
        <h2> 👨🏻 Hello Users</h2>
      </div>

      <MenuSection title="Trending" className="text-xl">
        <ExpandableMenu
          title="Best Sellers ✨"
          isOpen={openSections.sellers}
          toggle={() => toggleSection("sellers")}
        >
          <MenuItem text="Top Rated by Customers" link="/top-rated" />
          <MenuItem text="All-Time-Best-Seller" link="/all-time" />
          <MenuItem text="Staff Pick" link="/staff-pick" />
          <MenuItem text="Exclusive Online Offers" link="/exclusive" />
        </ExpandableMenu>
        <ExpandableMenu
          title="Trending Products"
          isOpen={openSections.products}
          toggle={() => toggleSection("products")}
        >
          <MenuItem text="Flash Deals" link="/flash" />
          <MenuItem text="Bundle Offers" link="/bundle" />
          <MenuItem text="Clearance Sale" link="/clearance" />
        </ExpandableMenu>
        <ExpandableMenu
          title="New Arrivals"
          isOpen={openSections.arrivals}
          toggle={() => toggleSection("arrivals")}
        >
          <MenuItem text="Handmade & Custom Creations" link="/handmade" />
          <MenuItem text="Most Sold Items" link="/most-sold" />
          <MenuItem text="Influencer Picks" link="/influencer" />
          <MenuItem text="Back in Stock" link="/back-in-stock" />
        </ExpandableMenu>
        <ExpandableMenu
          title="Customer Reviews"
          isOpen={openSections.reviews}
          toggle={() => toggleSection("reviews")}
        >
          <MenuItem text="Verified Customer Testimonials" link="/verified" />
          <MenuItem text="Before & After Comparisons" link="/comparisons" />

        </ExpandableMenu>
      </MenuSection>

      <MenuSection title="Shop">
        <ExpandableMenu
          title="Acrylic Accessories ✨"
          isOpen={openSections.acrylic}
          toggle={() => toggleSection("acrylic")}
        >
          <MenuItem text="Acrylic sheets" link="/sheets" />

          <MenuItem text="Acrylic Wood" link="/mdf-wood" />
          <MenuItem text="Mdf Wood" link="/wood" />
        </ExpandableMenu>

        <ExpandableMenu
          title="UV Printing Wall Art "
          isOpen={openSections.UV}
          toggle={() => toggleSection("UV")}
        >
          <MenuItem text="Custom Frames" link="/frames" />
          <MenuItem text="Acrylic Prints" link="/prints" />
          <MenuItem text="Wall Decor" link="/wall-decor" />
          <MenuItem text="Canvas Art" link="/canvas-art" />
          <MenuItem text="Decorative Panels" link="/panels" />
        </ExpandableMenu>

        <ExpandableMenu
          title="Wood "
          isOpen={openSections.Wood}
          toggle={() => toggleSection("Wood")}
        >
          <MenuItem text="Wood Easel Canvas" link="/wood-easel" />
          <MenuItem text="Wood Sheet" link="/wood-sheet" />
          <MenuItem text="Wood Shelves" link="/wood-shelves" />
          <MenuItem text="Customize Wood" link="/customize-wood" />
          <MenuItem text="Wood Frame" link="/wood-frame" />
          <MenuItem text="Ramadan & Eid Wood" link="/ramadan" />
        </ExpandableMenu>
        <ExpandableMenu
          title="Neon "
          isOpen={openSections.Neon}
          toggle={() => toggleSection("Neon")}
        >
          <MenuItem text="Festival Neon" link="/festival-neon" />
          <MenuItem text="Celebration Neon" link="/celebration-neon" />
          <MenuItem text="Office & Event" link="/office" />
          <MenuItem text="Customize" link="/customize" />
        </ExpandableMenu>

        <ExpandableMenu
          title="Flowers & Plants "
          isOpen={openSections.Flowers}
          toggle={() => toggleSection("Flowers")}
        >
          <MenuItem text="Fresh Flowers" link="/fresh" />
          <MenuItem text="Indoor Plants" link="/indoor" />
          <MenuItem text="Limited Edition" link="/limited-edition" />
          <MenuItem text="Outdoor Plants" link="/outdoor" />
        </ExpandableMenu>
      </MenuSection>

      <MenuSection title="Services">
       
        <ExpandableMenu
          title="Photography & Videography "
          isOpen={openSections.photography}
          toggle={() => toggleSection("photography")}
        >
          <MenuItem text="Event Photography " link="/event-photography" />
          <MenuItem text="Corporate Shoots " link="/corporate" />
          <MenuItem text="Product Photography " link="/product" />
          <MenuItem text="Promotional Videos" link="/promotional" />
          <MenuItem text="Special Videography Services" link="/Special-photography" />
        </ExpandableMenu>
        <ExpandableMenu
          title="Exhibition & Events "
          isOpen={openSections.events}
          toggle={() => toggleSection("events")}
        >
          <MenuItem text="Event Setup" link="/event-setup" />
          <MenuItem
            text="Photography & Videography Setup"
            link="/photography-setup"
          />
        </ExpandableMenu>
      
        <ExpandableMenu
          title="Other Services"
          isOpen={openSections.others}
          toggle={() => toggleSection("others")}
        >
          <MenuItem text="Vehicle Branding" link="/vehicle-branding" />
          <MenuItem text="Safety Equipments" link="/safety" />
          <MenuItem text="Lighting poles" link="/lighting" />
          <MenuItem text="Banner" link="/banner" />
          <MenuItem text="Solar Lights" link="/solar-lights" />

          <MenuItem text="Flag Stand" link="/flag-stand" />
          <MenuItem text="Street signs" link="/Street-signs" />
          <MenuItem text="Led & Neon Signage" link="/led" />
          <MenuItem text="Exbition stand" link="/exhibition" />
          <MenuItem text="Merchanding stands" link="/merchandising" />
          <MenuItem text="Flex Face Signage" link="/flex" />
        </ExpandableMenu>
      </MenuSection>




       
        
     

      <MenuSection title="Help and Settings">
        <MenuItem text="Your Account" link="/account" />
        <MenuItem text="Customer Section" link="/customer" />
        <MenuItem text="Sign In" link="/signIn" />
        <MenuItem text="Sign Up" link="/signUp" />
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
