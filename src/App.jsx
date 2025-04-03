
import React from "react";
import { useSelector } from "react-redux";
import {  Routes, Route } from "react-router-dom";


import Home from "./Pages/Home";
import PageLayout from "./Components/PageLayout";
import { ProductProvider } from "./Context/ProductContext";
import { GridProvider } from "./Context/GridContext";
import { AuthProvider } from "./Context/AuthContext";
import { useAuth } from "./Context/AuthContext";

import ContactUs from "./FootersPages/ContactUs";
import TrackOrder from "./FootersPages/TrackOrder";
import Returns from "./FootersPages/Returns";
import FAQ from "./FootersPages/FAQ";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import OurStory from "./FootersPages/OurStory";
import About from "./FootersPages/About";
import Careers from "./FootersPages/Careers";
import StoreLocator from "./FootersPages/StoreLocator";
import PressMedia from "./FootersPages/PressMedia";
import Privacy from "./FootersPages/Privacy";
import TermsConditions from "./FootersPages/TermsConditions";
import Shipping from "./FootersPages/Shipping";
import Sitemap from "./FootersPages/Sitemap";

import Photography from "./Pages/Photography";
import Security from "./FootersPages/Security";
import Cancellation from "./FootersPages/Cancellation";
import Payments from "./FootersPages/Payments";
import TodaysDeals from "./Pages/TodaysDeals";
import Shop from "./Pages/Shop";
import NewArrivals from "./Pages/NewArrivals";
import YourAccount from "./Components/AccountSection";
import Wishlist from "./Components/WishList";
import Cartpage from "./Components/Cartpage";
import CustomerSection from "./Components/CustomerSection";
import Checkout from "./Components/Checkout";
import { useState } from "react";
import SidebarMenu from "./Components/SidebarMenu";

import { PackageProvider } from "./Context/PackageContext";
import { VoucherProvider } from "./Context/VoucherContext";
import { PromotionProvider } from "./Context/PromotionContext";
import { Navigate } from "react-router-dom"; 
import Acrylic from "./Pages/Acrylic";
import AllTime from "./SidebarPages/BestSellers/AllTime";
import Exclusive from "./SidebarPages/BestSellers/Exclusive";
import TopRated from "./SidebarPages/BestSellers/TopRated";
import StaffPick from "./SidebarPages/BestSellers/StaffPick"; 
import MdfWood from './SidebarPages/AcrylicAccessories/MdfWood';
import Sheets from './SidebarPages/AcrylicAccessories/Sheets';
import Wood from './SidebarPages/AcrylicAccessories/Wood';
import Comparisons from './SidebarPages/CustomerReviews/Comparisons';
import Verified from './SidebarPages/CustomerReviews/Verified';
import Flash from './SidebarPages/Trending/Flash';
import Bundle from './SidebarPages/Trending/Bundle';
import Clearance from './SidebarPages/Trending/Clearance';
import BackinStock from './SidebarPages/NewArrivals/BackinStock';
import Handmade from './SidebarPages/NewArrivals/Handmade';
import Influencer from './SidebarPages/NewArrivals/Influencer';
import MostSold from './SidebarPages/NewArrivals/MostSold';
import CanvasArt from './SidebarPages/UvPrinting/CanvasArt';
import Frames from './SidebarPages/UvPrinting/Frames';
import Panels from './SidebarPages/UvPrinting/Panels';
import Prints from './SidebarPages/UvPrinting/Prints';
import WallDecor from './SidebarPages/UvPrinting/WallDecor';  
import CustomizeWood from './SidebarPages/Wood/CustomizeWood';
import Ramadan from './SidebarPages/Wood/Ramadan';
import WoodEasel from './SidebarPages/Wood/WoodEasel';
import WoodFrame from './SidebarPages/Wood/WoodFrame';
import WoodSheet from './SidebarPages/Wood/WoodSheet';
import WoodShelves from './SidebarPages/Wood/WoodShelves';
import Fresh from './SidebarPages/Flowers/Fresh';
import Indoor from './SidebarPages/Flowers/Indoor';
import LimitedEdition from './SidebarPages/Flowers/LimitedEdittion';
import Outdoor from './SidebarPages/Flowers/Outdoor';
import CelebrationNeon from './SidebarPages/Neon/CelebrationNeon';
import Customize from './SidebarPages/Neon/Customize';
import FestivalNeon from './SidebarPages/Neon/FestivalNeon';
import Office from './SidebarPages/Neon/Office';
import Corporate from './SidebarPages/Photography/Corporate';
import EventPhotography from './SidebarPages/Photography/EventPhotography';
import EventSetup from './SidebarPages/Event/EventSetup';
import PhotographySetup from './SidebarPages/Event/PhotographySetup';
import Product from './SidebarPages/Photography/Product';
import Promotional from './SidebarPages/Photography/Promotional';
import SpecialPhotography from './SidebarPages/Photography/SpecialPhotography';
import Banner from './SidebarPages/OtherServices/Banner'
import Exhibition from "./SidebarPages/OtherServices/Exhibtion";
import FlagStand from "./SidebarPages/OtherServices/FlagStand";
import Flex from "./SidebarPages/OtherServices/Flex";
import Led from "./SidebarPages/OtherServices/Led";
import Lighting from "./SidebarPages/OtherServices/Lighting";
import Merchandising from "./SidebarPages/OtherServices/Merchandising";
import Safety from "./SidebarPages/OtherServices/Safety";
import SolarLights from "./SidebarPages/OtherServices/SolarLights";
import StreetSigns from "./SidebarPages/OtherServices/StreetSigns";
import VehicleBranding from "./SidebarPages/OtherServices/VehicleBranding";
import EmptyCart from "./Components/EmptyCart";
import SellwithUs from "./Components/SellwithUs";
import ProductDetail from "./Components/ProductDetail";
import ProductList from "./Components/ProductList";
import Layout from "./Components/Layout";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { LanguageProvider } from "./Context/LanguageContext"; 
import WalletContext from "./Context/WalletProvider";

import Solana from "./Components/Solana";
import VerifyOtp from "./Components/VerifyOtp";
import AuthPage from "./Components/AuthPage";
import Confirmation from "./Components/Confirmation";
import AdminDashboard from "./Components/AdminDashboard";
import Products from "./Components/Products";
import  Analytics  from "./Components/Analytics";
import FormAdd from "./Components/FormAdd";
function App() {
  const { i18n } = useTranslation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to change language dynamically
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  };

  // Apply saved language on page load
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    changeLanguage(savedLanguage);
  }, []);

  const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/signin" />;
  };

  return (
    <>
     <SidebarMenu
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
   
       <div style={styles.pageContainer}>
       <WalletContext>
        <LanguageProvider>
     <AuthProvider>
      <PackageProvider>
        <VoucherProvider>
          <PromotionProvider>
    
       
    <ProductProvider>
      <GridProvider>
    
          <Routes>

            {/* Routing for the Dashboard pages */}

            <Route
              path="/admin"
              element={
                <PageLayout>
                 <AdminDashboard/>
                </PageLayout>
              }
            />
             <Route
              path="/products"
              element={
                <PageLayout>
   <Products/>
                </PageLayout>
              }
            />
               <Route
              path="/analytics"
              element={
                <PageLayout>
                  <Analytics/>
    
                </PageLayout>
              }
            />
               <Route
              path="/formAdd"
              element={
                <PageLayout>
                 <FormAdd/>
    
                </PageLayout>
              }
            />
         



            <Route
              path="/"
              element={
                <PageLayout>
                  <Home />
                </PageLayout>
              }
            />
            <Route
              path="/layout"
              element={
                <PageLayout>
                <Layout/>
                </PageLayout>
              }
            />
              <Route
              path="/confirmation"
              element={
                <PageLayout>
               <Confirmation/>
                </PageLayout>
              }
            />
             <Route
              path="/auth"
              element={
                <PageLayout>
                <AuthPage/>
                </PageLayout>
              }
            />
            <Route
              path="/verify"
              element={
                <PageLayout>
             <VerifyOtp/>
                </PageLayout>
              }
            />
            {/* Routing for the product pages */}
            <Route path="/" element={<ProductList />} />
            <Route path="/product-details/:id" element={<ProductDetail />} />
            
           
               <Route
                    path="*"
                    element={
                      <PageLayout>
                        <div>404 Not Found</div>
                      </PageLayout>
                    }
                  />
                   <Route
              path="/deals"
              element={
                <PageLayout>
                  <TodaysDeals />
                </PageLayout>
              }
            />
                   <Route
              path="/solana"
              element={
                <PageLayout>
                  <Solana/>
                </PageLayout>
              }
            />

            <Route
              path="/acrylic"
              element={
                <PageLayout>
                 <Acrylic/>
                </PageLayout>
              }
            />
            <Route
              path="/shop"
              element={
                <PageLayout>
                  <Shop />
                </PageLayout>
              }
            />
            <Route
              path="/new"
              element={
                <PageLayout>
                  <NewArrivals />
                </PageLayout>
              }
            />
             <Route
              path="/checkout"
              element={
                <PageLayout>
               <Checkout/>  
                </PageLayout>
              }
            />
            {/* ROouting for the Footer pages */}
            <Route
              path="/careers"
              element={
                <PageLayout>
                  <Careers />
                </PageLayout>
              }
            />
            <Route
              path="/careers"
              element={
                <PageLayout>
                  <Careers />
                </PageLayout>
              }
            />
            <Route
              path="/store-locator"
              element={
                <PageLayout>
                  <StoreLocator />
                </PageLayout>
              }
            />
            <Route
              path="/press-media"
              element={
                <PageLayout>
                 
                  <PressMedia />
                </PageLayout>
              }
            />
            <Route
              path="/privacy"
              element={
                <PageLayout>
                  <Privacy />
                </PageLayout>
              }
            />
           
            <Route
              path="/payments"
              element={
                <PageLayout>
                  <Payments />
                </PageLayout>
              }
            />
            <Route
              path="/photography"
              element={
                <PageLayout>
                  <Photography />
                </PageLayout>
              }
            />
            <Route
              path="/terms"
              element={
                <PageLayout>
                  <TermsConditions />
                </PageLayout>
              }
            />
            <Route
              path="/cancellation"
              element={
                <PageLayout>
                  <Cancellation />
                </PageLayout>
              }
            />
            <Route
              path="/security"
              element={
                <PageLayout>
                  <Security />
                </PageLayout>
              }
            />
            <Route
              path="/sitemap"
              element={
                <PageLayout>
                  <Sitemap />
                </PageLayout>
              }
            />
            <Route
              path="/shipping"
              element={
                <PageLayout>
                  <Shipping />
                </PageLayout>
              }
            />

            <Route
              path="/contactus"
              element={
                <PageLayout>
                  <ContactUs />
                </PageLayout>
              }
            />
            <Route
              path="/track"
              element={
                <PageLayout>
                  <TrackOrder />
                </PageLayout>
              }
            />
            <Route
              path="/returns"
              element={
                <PageLayout>
                  <Returns />
                </PageLayout>
              }
            />
            <Route
              path="/faq"
              element={
                <PageLayout>
                  <FAQ />
                </PageLayout>
              }
            />
            <Route
              path="/signin"
              element={
                <PageLayout>
                  <SignIn />
                </PageLayout>
              }
            />
            <Route
              path="/signup"
              element={
                <PageLayout>
                  <SignUp />
                </PageLayout>
              }
            />
            <Route
              path="/OurStory"
              element={
                <PageLayout>
                  <OurStory />
                </PageLayout>
              }
            />
            <Route
              path="/about"
              element={
                <PageLayout>
                  <About />
                </PageLayout>
              }
            />
            {/* Routing for the sidebarpages */}
            <Route
              path="/account"
              element={
                <PageLayout>
                <YourAccount/>
                </PageLayout>
              }
            />
             <Route
              path="/wishlist"
              element={
                <PageLayout>
                  {<ProtectedRoute />}
               <Wishlist/>
                </PageLayout>
              }
            />
             <Route
              path="/empty"
              element={
                <PageLayout>
                  <EmptyCart/>
                 
              
                </PageLayout>
              }
            />
            {/* Routing for empty Cart */}
            <Route
              path="/cart"
              element={
                <PageLayout>
                   
                   <Cartpage/>
            
                </PageLayout>
              }
            />
                    <Route path="/list" element={<ProductList />} />
                    <Route path="/product/:id" element={<ProductDetail/>} />

          

             <Route
              path="/customer"
              element={
                <PageLayout>
                <CustomerSection/>
                </PageLayout>
              }
            />
            {/* Routing for the sidebarPages */}
            <Route
              path="/all-time"
              element={
                <PageLayout>
               <AllTime/>
                </PageLayout>
              }
            />
              <Route
              path="/exclusive"
              element={
                <PageLayout>
             <Exclusive/>
                </PageLayout>
              }
            />
            <Route
              path="/staff-pick"
              element={
                <PageLayout>
                  <StaffPick />
                </PageLayout>
              }
            />
            <Route
              path="/top-rated"
              element={
                <PageLayout>
                  <TopRated />
                </PageLayout>
              }
            />
            <Route
              path="/mdf-wood"
              element={
              <PageLayout>
                <MdfWood />
              </PageLayout>
              }
            />
            <Route
              path="/sheets"
              element={
              <PageLayout>
                <Sheets />
              </PageLayout>
              }
            />
            <Route
              path="/wood"
              element={
              <PageLayout>
                <Wood />
              </PageLayout>
              }
            />
            <Route
              path="/comparisons"
              element={
                <PageLayout>
                 <Comparisons/>
                </PageLayout>
              }
            />
           
            <Route
              path="/verified"
              element={
                <PageLayout>
                <Verified/>
                </PageLayout>
              }
            />
            <Route
              path="/flash"
              element={
              <PageLayout>
                <Flash />
              </PageLayout>
              }
            />
            <Route
              path="/bundle"
              element={
              <PageLayout>
                <Bundle />
              </PageLayout>
              }
            />
            <Route
              path="/clearance"
              element={
              <PageLayout>
                <Clearance />
              </PageLayout>
              }
            />
            <Route
              path="/back-in-stock"
              element={
              <PageLayout>
                <BackinStock />
              </PageLayout>
              }
            />
            <Route
              path="/handmade"
              element={
              <PageLayout>
                <Handmade />
              </PageLayout>
              }
            />
            <Route
              path="/influencer"
              element={
              <PageLayout>
                <Influencer />
              </PageLayout>
              }
            />
            <Route
              path="/most-sold"
              element={
              <PageLayout>
                <MostSold />
              </PageLayout>
              }
            />
            <Route
              path="/canvas-art"
              element={
              <PageLayout>
                <CanvasArt />
              </PageLayout>
              }
            />
            <Route
              path="/frames"
              element={
              <PageLayout>
                <Frames />
              </PageLayout>
              }
            />
            <Route
              path="/panels"
              element={
              <PageLayout>
              <Panels/>
              </PageLayout>
              }
            />
            <Route
              path="/prints"
              element={
              <PageLayout>
                <Prints />
              </PageLayout>
              }
            />
            <Route
              path="/wall-decor"
              element={
              <PageLayout>
                <WallDecor />
              </PageLayout>
              }
            />
            <Route
              path="/customize-wood"
              element={
              <PageLayout>
                <CustomizeWood />
              </PageLayout>
              }
            />
            <Route
              path="/ramadan"
              element={
              <PageLayout>
                <Ramadan />
              </PageLayout>
              }
            />
            <Route
              path="/wood-easel"
              element={
              <PageLayout>
                <WoodEasel />
              </PageLayout>
              }
            />
            <Route
              path="/wood-frame"
              element={
              <PageLayout>
                <WoodFrame />
              </PageLayout>
              }
            />
            <Route
              path="/wood-sheet"
              element={
              <PageLayout>
                <WoodSheet />
              </PageLayout>
              }
            />
            <Route
              path="/wood-shelves"
              element={
              <PageLayout>
                <WoodShelves />
              </PageLayout>
              }
            />
            <Route
              path="/fresh"
              element={
              <PageLayout>
                <Fresh />
              </PageLayout>
              }
            />
            <Route
              path="/indoor"
              element={
              <PageLayout>
                <Indoor />
              </PageLayout>
              }
            />
            <Route
              path="/limited-edition"
              element={
              <PageLayout>
                <LimitedEdition />
              </PageLayout>
              }
            />
            <Route
              path="/outdoor"
              element={
              <PageLayout>
                <Outdoor />
              </PageLayout>
              }
            />
            <Route
              path="/celebration-neon"
              element={
              <PageLayout>
                <CelebrationNeon />
              </PageLayout>
              }
            />
            <Route
              path="/customize"
              element={
              <PageLayout>
                <Customize />
              </PageLayout>
              }
            />
            <Route
              path="/festival-neon"
              element={
              <PageLayout>
                <FestivalNeon />
              </PageLayout>
              }
            />
            <Route
              path="/office"
              element={
              <PageLayout>
                <Office />
              </PageLayout>
              }
            />

            <Route
              path="/corporate"
              element={
              <PageLayout>
                <Corporate />
              </PageLayout>
              }
            />
            <Route
              path="/event-photography"
              element={
              <PageLayout>
                <EventPhotography />
              </PageLayout>
              }
            />
            <Route
              path="/product"
              element={
              <PageLayout>
                <Product />
              </PageLayout>
              }
            />
            <Route
              path="/promotional"
              element={
              <PageLayout>
                <Promotional />
              </PageLayout>
              }
            />
            <Route
              path="/special-photography"
              element={
              <PageLayout>
                <SpecialPhotography />
              </PageLayout>
              }
            />
            <Route
              path="/event-setup"
              element={
              <PageLayout>
                <EventSetup />
              </PageLayout>
              }
            />
            <Route
              path="/photography-setup"
              element={
              <PageLayout>
                <PhotographySetup />
              </PageLayout>
              }
            />
            <Route
              path="/banner"
              element={
              <PageLayout>
              <Banner />
              </PageLayout>
              }
            />
            <Route
              path="/exhibition"
              element={
              <PageLayout>
              <Exhibition />
              </PageLayout>
              }
            />
            <Route
              path="/flag-stand"
              element={
              <PageLayout>
              <FlagStand />
              </PageLayout>
              }
            />
            <Route
              path="/flex"
              element={
              <PageLayout>
              <Flex />
              </PageLayout>
              }
            />
            <Route
              path="/led"
              element={
              <PageLayout>
              <Led />
              </PageLayout>
              }
            />
            <Route
              path="/lighting"
              element={
              <PageLayout>
              <Lighting />
              </PageLayout>
              }
            />
            <Route
              path="/merchandising"
              element={
              <PageLayout>
              <Merchandising />
              </PageLayout>
              }
            />
            <Route
              path="/safety"
              element={
              <PageLayout>
              <Safety />
              </PageLayout>
              }
            />
            <Route
              path="/solar-lights"
              element={
              <PageLayout>
              <SolarLights />
              </PageLayout>
              }
            />
            <Route
              path="/street-signs"
              element={
              <PageLayout>
              <StreetSigns />
              </PageLayout>
              }
            />
            <Route
              path="/vehicle-branding"
              element={
              <PageLayout>
              <VehicleBranding />
              </PageLayout>
              }
            />
            {/* Routing for the topNav */}
            <Route
              path="/sell-with-us"
              element={
              <PageLayout>
             <SellwithUs/>
              </PageLayout>
              }
            />

            

            
          </Routes>
         
      
      </GridProvider>
    </ProductProvider>
    </PromotionProvider>
    </VoucherProvider>
    </PackageProvider>
    </AuthProvider>
    </LanguageProvider>
    </WalletContext>
   
    </div>
    </>
  );
}
const styles = {
  pageContainer: {
    width: "100vw",
    minHeight: "100vh",
    padding: 0, // Remove any extra padding
    margin: 0, // Remove any extra margin
    backgroundColor: "#f9f9f9",
  },
};

export default App;
