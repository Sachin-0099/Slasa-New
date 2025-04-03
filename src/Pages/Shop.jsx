import React from 'react'
import Layout from '../Components/Layout'
import ImageGrid from '../Components/ImageGrid'
import ProductList from "../Components/ProductList"
import ProductCard from '../Components/ProductCard'


const Shop = () => {
  const images2 = [
    { src: "Images/WD1.jpg", title: "Water Color" },
    { src: "Images/WD2.jpg", title: "AcrylicPaints"},
    { src: "Images/WD3.jpg", title: "AcrylicPaints"},
    { src: "Images/WD4.jpg", title: "SketchPencil"},
    { src: "Images/WD6.jpg", title:"Charcoal.jpeg"},
    { src: "Images/WD4.jpg", title: "BrushPens.jpeg"},
    { src: "Images/WD3.jpg", title: "ColouredFinals"},
    { src: "Images/WD4.jpg", title:"SketchPencil"},
    { src: "Images/WD6.jpg", title: "Charcoal.jpeg"},
    { src: "Images/WD4.jpg", title: "BrushPens.jpeg"},
  ];
  return (
    <div>
      <Layout/>
           <ImageGrid  images={images2} />
      
      <Layout/>
      <div className="flex justify-center gap-4 flex-wrap p-4">
        <ProductList/>
     <ProductCard/>
       
      </div>
 
      
      
    </div>
  )
}

export default Shop
