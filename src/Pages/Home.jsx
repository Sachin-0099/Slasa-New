import React from "react";
import HeroSection from "../Components/HeroSection";
import ProductLayout from "../Context/ProductContext";
import Footer from "../Components/Footer";
import Grid from "../Components/Grid";
import GridData from "../Data/GridData.json";
import AcrylicLayout from "../Components/AcrylicLayout";

const Home = () => {
  const { sectionsData, sectionsData2 } = GridData;

  return (
    <>
      <HeroSection
        slides={[
          "Images/FIN2.jpg",
          "Images/fin3.jpg",
          "Images/FIN4.jpg",

          "/Images/FIN5.jpg",
          "Images/FIN2.jpg",

          "/Images/FIN6.jpg",
         
        ]}
      />
      <ProductLayout /> 
      <Grid sections={sectionsData2} />
      <AcrylicLayout />
      <Footer />
    </>
  );
};

export default Home;
