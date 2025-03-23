import React from 'react'
import Header from '../Components/Header'
import PhotoAbout from '../Components/PhotoAbout'
import Section from '../Components/Section'
import EditSection from '../Components/EditSection'

import Experience from '../Components/Experience'
import Phototour from '../Components/Phototour'
import {EditData,ExperienceData,PhotoTourData,GraphicsData} from '../Data/PhotoData'
import Footer from '../Components/Footer'
import GraphicsSection from '../Components/GraphicsSection'



const Photography = () => {
  return (
    <div>
        <>
    <Header/>
   <PhotoAbout/>
    <Section/>
  
    <EditSection EditData={EditData}/>
    <GraphicsSection GraphicsData={GraphicsData}/>


    <Experience ExperienceData={ExperienceData}/>
    <Phototour Phototour={PhotoTourData}/>
    </>
    <Footer/>
    </div>
  )
}

export default Photography
