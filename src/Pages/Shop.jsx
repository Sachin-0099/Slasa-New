import React from 'react'
import Layout from '../Components/Layout'
import ImageGrid from '../Components/ImageGrid'

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
           <ImageGrid  images={images2} />
      
      <Layout/>
 
      
      
    </div>
  )
}

export default Shop
