import React from 'react'
import about from '/Images/about.png'
import logo from '/Images/logo.png'

const Header = () => {
  return (
    <>
    <div className='min-h-[60vh] w-screen flex flex-wrap lg:flex-col md:flex-col sm:flex-row justify-start items-center'>
        <div className='h-[60vh] w-[100%] flex flex-wrap'>
            <div className='lg:h-full lg:w-[50%] md:h-full md:w-[50%] w-full h-[20vh]'>
                <div className='flex flex-wrap items-center justify-center'>
                    <img src={logo} alt="" className='lg:w-[90vh] lg:h-[36vh] md:w-[50%] md:h-[20vh] h-[15vh] w-[30vh] object-cover' />
                    <p className="lg:text-6xl md:text-3xl mt-2 text-3xl font-semibold text-transparent bg-gradient-to-bl from-[#3087D1] via-[#3087D5] to-black bg-clip-text hover:underline hover:underline-offset-8 hover:decoration-[#3087D1]">
  Emad Captures
</p>

                </div>
            </div>
            <div className='lg:h-full bg-blue-500 lg:w-[50%] md:h-full md:w-[50%] w-full h-[35vh]'>
                <img src={about} className='w-full h-full object-cover'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header