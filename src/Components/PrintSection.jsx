import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { EmadLogo } from '../Data/PhotoData';
const PrintSection = ({EditData}) => {
  return (
    <>
    <div className='min-h-[68vh] w-screen bg-[#6aabe4] flex flex-col items-center justify-center py-10'>
        <h1 className='relative text-transparent bg-gradient-to-r from-[#000000] via-[#3087D5] to-black bg-clip-text font-bold lg:text-6xl md:text-4xl text-3xl text-center font-semibold'>
        <span className={`hidden lg:inline-block absolute bottom-0 lg:w-[20vh] h-[4px] bg-gradient-to-r from-[#3087D1] via-[#3087D5] to-black mt-[10vh]`}></span>
            Print</h1>
        <div className='h-full w-full flex items-center justify-center'>
            <div className='h-full lg:w-[70%] md:w-[70%] w-[90%] mt-5 flex gap-10 overflow-hidden overflow-x-auto items-center justify-around'>
                {EditData.map((photo,index)=>(
                    <div key={index}  className='lg:w-[40vh] flex flex-col items-center justify-center lg:h-[50vh] md:w-[40vh] md:h-[50vh] w-[30vh] h-[30vh] bg-white'>
                        <div className='lg:h-[35vh] lg:w-[36vh] md:h-[35vh] md:w-[35vh] w-[20vh] h-[20vh] m-2 bg-blue-500'>
                            <img src={photo.src} className='w-full h-full object-cover' alt="" />
                        </div>
                        <h2 className='lg:text-2xl md:text-xl text-sm font-semibold text-center'>{photo.name}</h2>
                        <p className='lg:text-md md:text-sm text-xs text-gray-500 text-center'>{photo.range}</p>
                    </div>
                ))}
            </div>
        </div>
        <button className='lg:px-10 lg:py-5 md:px-10 md:py-5 px-6 py-5 mt-10 bg-gradient-to-r font-bold lg:text-3xl md:text-2xl text-xl from-[#3087D1] to-[#19456B] border border-outline-2 text-white flex items-center justify-center gap-3'>Coming Soon
            <FaArrowRight/>
        </button>
    </div>

    
    <div className='lg:h-[26vh] w-screen bg-blue-300 mt-10'>
        {EmadLogo.map((image)=>(
            <img key={image} src={image.src} className='w-full h-full object-cover'/>
        ))}
    </div>
    </>
  )
}

export default PrintSection