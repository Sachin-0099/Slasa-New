import React from 'react'

const PhotoSectionCard = ({PhotoData,title,width,Description}) => {
  return (
    <>
    <div className='h-full w-screen lg:mb-10 md:mb-5 mb-2 flex flex-col items-center'>
          <h1 className='relative text-transparent bg-gradient-to-r from-[#3087D1] via-[#3087D5] to-black bg-clip-text font-bold lg:text-6xl md:text-4xl text-3xl text-center  font-semibold hover:underline hover:underline-offset-8 hover:decoration-[#3087D1]'>
          <span className={`hidden lg:inline-block absolute bottom-0 lg:w-[${width}] h-[4px] bg-gradient-to-r from-[#3087D1] via-[#3087D5] to-black mt-[20vh]`}></span>
            {title}</h1>
           {
            Description.map((desc,index)=>(
              <p key={index} className='lg:px-10 lg:mx-50 md:mx-30 lg:py-5 py-2 mx-5 text-gray-500 md:text-xl text-sm lg:text-xl'>{desc.description}</p>
            ))
           } 
          <div className='h-full w-full flex items-center justify-center'>
            <div className='h-[80%]  lg:w-[70%] md:w-[70%] w-[90%] mt-10 flex flex-wrap lg:flex-col-3 md:flex-col-2 sm:flex-col-2 items-center justify-around'>
                {PhotoData.map((photo,index)=>(
                     <div key={index} className='lg:h-[34vh] lg:w-[40vh] md:h-[25vh] md:w-[40vh] h-[25vh] w-[18vh] '>
                      <img src={photo.src} className='h-[25vh]'/>
                     </div>
                ))}
            </div>
          </div>
          {Description.map((des,index)=>(
            <div key={index} className='w-[40%] h-[10%] flex lg:py-5 py-2 items-center justify-center mt-[-50 mb-10'>
              <img src={des.icon} alt={des.icon} className='lg:w-[10vh] md:w-[8vh] w-[5vh]'/>
              <a
  href={des.link.startsWith("http") ? des.link : `https://${des.link}`}
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-cyan-600 text-cyan-500 px-5 lg:text-2xl md:text-2xl text-md"
>
  {des.link.replace("https://", "")}  {/* Display without "https://" */}
</a>




            </div>
          ))}
    </div>
    </>
  )
}

export default PhotoSectionCard