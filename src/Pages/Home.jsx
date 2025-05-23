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
import ProductGrid from "../Components/ProductGrid";
import CategoryGrid from "../Components/CategoryGrid";
import Animation from "../Components/Animation";
import { useTranslation } from "react-i18next";
import MiddleSectionImg from "../Components/ImageComponent";
import ImageComponent from "../Components/ImageComponent";
import ImageGrid from "../Components/ImageGrid";
import Sale from "../Components/Sale";

const Home = () => {
    const { t, i18n } = useTranslation(); 
  const { sectionsData, sectionsData2 } = GridData;
  const { homepageVouchers } = useVouchers();
  const images2 = [
    { src: "Images/WD1.jpg", title: t("WaterColor") },
    { src: "Images/WD2.jpg", title: t("AcrylicPaints") },
    { src: "Images/WD3.jpg", title: t("ColouredFinals") },
    { src: "Images/WD4.jpg", title: t("SketchPencil") },
    { src: "Images/WD6.jpg", title: t("Charcoal.jpeg") },
    { src: "Images/WD4.jpg", title: t("BrushPens.jpeg") },
    { src: "Images/WD3.jpg", title: t("ColouredFinals") },
    { src: "Images/WD4.jpg", title: t("SketchPencil") },
    { src: "Images/WD6.jpg", title: t("Charcoal.jpeg") },
    { src: "Images/WD4.jpg", title: t("BrushPens.jpeg") },
  ];

  return (
    <>
      <HeroSection
        slides={[
          "Images/Sell.jpeg",
       
         
         
          "Images/HeroAcrylic.jpg",

         
        ]}
      />
      <Animation/>

    
     
      <ProductLayout /> 
      <AcrylicLayout />
      <ProductGrid/>
      <ProductSection title={t("Featured Products")} description={t("Discover our best-selling products, carefully selected to meet all your needs for home renovation and construction projects.")} className="mt-16" />
     


      <div className="flex justify-center gap-4 flex-wrap p-4">
        <ProductCard />
        <ProductList />
      </div>
<div className="mt-10">
<ProductSection title={t("Our Collection")} description={t("Discover our best-selling products, carefully selected to meet all your needs for home renovation and construction projects.")}  />
</div>
     
     
    
      <Grid sections={sectionsData2} />
    
      


      <ImageGrid  images={images2} />

    
     
     
      <PromotionOffers promotionId={2} />
     <div className="mt-5">
     <ImageComponent src="Images/Elegance1.gif" alt="Elegant Display" />
     </div>
      
      <CategoryGrid/>
      {/* <HomeCategories/> */}
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
        <ImageComponent src="Images/Bag.jpg" alt="Elegant Display" />
      <Sale/>
      <Footer />
    </>
  );
};

export default Home;
