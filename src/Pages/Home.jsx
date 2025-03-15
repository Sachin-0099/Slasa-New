import React from 'react'
import HeroSection from '../Components/HeroSection'
import ProductLayout from '../Context/ProductContext'
import Footer from '../Components/Footer'



const Home = () => {
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
    // "/Images/FIN2.jpg",
    // "/Images/FIN2.jpg",




  
  ]}

 
/>
<ProductLayout /> {/* Displays dynamic products */}
<Footer/>




    </>
  )
}

export default Home
