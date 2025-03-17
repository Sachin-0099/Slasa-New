import React from 'react'
import about2 from '/Images/about2.png'

const SectionCard = ({PhotoData,title,width}) => {
  return (
    <>
    <div className='h-full w-screen lg:mb-10 md:mb-5 mb-2'>
    <h1 className='relative text-transparent bg-gradient-to-b from-[#000000] via-[#3087D5] to-black bg-clip-text font-bold lg:text-6xl md:text-4xl text-3xl text-center font-semibold'>
<span 
  style={{ width: width }} 
  className="hidden lg:inline-block absolute left-1/2 -translate-x-1/2 bottom-[-6px] h-[4px] bg-gradient-to-r from-[#000000] via-[#3087D5] to-black">
</span>

            {title}</h1>
        <div className='h-full w-full flex items-center justify-center'>
            <div className='h-[90%]  lg:w-[70%] md:w-[70%] w-[90%] mt-10 flex flex-wrap lg:flex-col-3 md:flex-col-2 sm:flex-col-2 items-center justify-around'>
                {PhotoData.map((photo,index)=>(
                     <div key={index} className='lg:h-[30vh] lg:w-[40vh] md:h-[30vh] md:w-[40vh] h-[20vh] w-[18vh] '>
                      <img src={photo.src}/>
                     </div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default SectionCard