import React from 'react'
import about from '/Images/about.png'
import logo from '/Images/logo.png'

const Header = () => {
  return (
    <>
    <div className='h-[90vh] w-screen flex flex-wrap lg:flex-col md:flex-col sm:flex-row justify-center items-center'>
        <div className='h-[90%] w-[90%] m-10 flex flex-wrap'>
            <div className='lg:h-full lg:w-[60%] md:h-full md:w-[60%] w-full h-[40vh]'>
                <div className='flex flex-wrap items-center justify-center'>
                    <img src={logo} alt="" className='lg:w-[90vh] lg:h-[36vh] md:w-[50vh] md:h-[20vh] h-[10vh] w-[30vh] mt-10' />
                    <h1
  className="lg:text-4xl md:text-2xl text-lg p-4 md:p-10 lg:p-10 font-semibold leading-5 md:leading-7 lg:leading-10 text-transparent bg-clip-text relative bottom-20"
  style={{
    backgroundImage: "linear-gradient(to right, black, #3087d1, black)",
    marginTop: "auto", // Adjusts dynamically
  }}
>
  Emad Captures
</h1>



                </div>
            </div>
            <div className='lg:h-full lg:w-[72vh] md:h-full md:w-[40vh] w-full h-[40vh]'>
                <img src={about} className='w-full h-full object-cover'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header