import React from "react";
import HeroSection from "../Components/HeroSection";
import ProductLayout from "../Context/ProductContext";
import Footer from "../Components/Footer";
import Grid from "../Components/Grid";
import GridData from "../Data/GridData.json";
import AcrylicLayout from "../Components/AcrylicLayout";
import HomeSection from "../Components/HomeSection";
import HomeCategories from "../Components/Homecategories";
import ProductCard from "../Components/ProductCard";
import ProductSection from "../Components/ProductSection";
import ProductList from "../Components/ProductList";
import PromotionOffers from "../Components/PromotionOffers";
import { useVouchers } from "../Context/VoucherContext";
import Voucher from "../Components/Voucher";

const Home = () => {
  const { sectionsData, sectionsData2 } = GridData;
  const { homepageVouchers } = useVouchers();

  return (
    <>
      <HeroSection
        slides={[
          "Images/Sell.jpeg",
      
         
         
          "Images/Acrylic.png",

         
        ]}
      />
      <ProductLayout /> 
      <ProductSection title="Featured Products" description="Discover our best-selling products, carefully selected to meet all your needs for home renovation and construction projects." className="mt-16" />

      <div className="flex justify-center gap-4 flex-wrap p-4">
        <ProductCard />
        <ProductList />
      </div>
      <Grid sections={sectionsData2} />
      <AcrylicLayout />
     
     
      <PromotionOffers promotionId={2} />
      <HomeCategories/>
      <HomeSection/>
      <PromotionOffers promotionId={1} />
      {homepageVouchers.map((voucher, index) => (
        <Voucher
          key={index}
          title={voucher.title}
          subtitle={voucher.subtitle}
          discount={voucher.discount}
          sale={voucher.sale}
          categories={voucher.categories}
          imageUrl={voucher.imageUrl}
          buttonText={voucher.buttonText}
          buttonLink={voucher.buttonLink}
        />
      ))}
      <Footer />
    </>
  );
};

export default Home;
