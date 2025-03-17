import React from 'react'

const Phototour = ({Phototour}) => {
  return (
    <>
    <div className='min-h-[80vh] w-screen flex flex-wrap lg:flex-col md:flex-col sm:flex-row justify-center items-center mt-10'>
        {Phototour.map((data,index)=>(
            <div key={index} className='h-[95%] w-[90%] flex flex-wrap'>
                <div className='lg:h-full lg:w-[72vh] md:h-full md:w-[40vh] w-full h-[40vh]'>
                    <img src={data.src} className='w-full h-full object-cover'/>
                </div>
                <div className='lg:h-full lg:w-[50%] md:h-full md:w-[60%] w-full h-[60vh]'>
                    <div className='flex flex-wrap items-center justify-center'>
                    <h1 className="relative lg:text-6xl md:text-3xl mb-2 text-3xl font-semibold text-transparent bg-gradient-to-b from-[#000000] via-[#3087D5] to-black bg-clip-text">
  {data.title}
  <span className="absolute left-0 bottom-0 w-full h-[4px] bg-gradient-to-b from-black via-[#3087D5] to-black"></span>
</h1>

                        <p className='lg:text-lg md:text-md text-sm p-4 text-gray-500 md:p-10 lg:p-10 leading-5 md:leading-7 lg:leading-10'>{data.description}</p>
                        <button className='lg:px-12  lg:py-3 md:px-8 md:py-5 px-4 py-3 bg-gradient-to-b font-bold lg:text-xl md:text-xl text-sm from-[#000000]  via-[#3087d1] to-[#000000] border border-outline-2 text-white flex items-center justify-center gap-3'>{data.button}</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Phototour