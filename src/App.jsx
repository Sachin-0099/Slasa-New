import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PageLayout from "./Components/PageLayout";
import { ProductProvider } from "./Context/ProductContext";
import { GridProvider } from "./Context/GridContext";
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
import Acrylic from "./Pages/Acrylic";
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

// Import CarouselProvider

// Replace with your actual API URL

function App() {
  return (
    <ProductProvider>
      <GridProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <PageLayout>
                  <Home />
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
              path="/acrylic"
              element={
                <PageLayout>
                  <Acrylic />
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
               <Wishlist/>
                </PageLayout>
              }
            />
             <Route
              path="/cart"
              element={
                <PageLayout>
               <Cartpage/>
                </PageLayout>
              }
            />
             <Route
              path="/customer"
              element={
                <PageLayout>
                <CustomerSection/>
                </PageLayout>
              }
            />
            
          </Routes>
        </Router>
      </GridProvider>
    </ProductProvider>
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
