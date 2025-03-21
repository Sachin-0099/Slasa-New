import React from 'react'
import about2 from '/Images/about2.png'
const About = () => {
  return (
    <>
    <div className='min-h-[50vh] w-screen flex flex-wrap my-5 lg:flex-col md:flex-col sm:flex-row justify-center items-center'>
        <div className='min-h-[50vh] w-[100%] flex flex-wrap'>
            <div className='mt-8 lg:h-full lg:w-[60%] md:h-full md:w-[40%] w-full h-[40vh]'>
                <img src={about2} className='w-full h-full object-contain'/>
            </div>
            <div className='lg:h-full lg:w-[40%] md:h-full md:w-[60%] w-full h-[50vh]'>
                <div className='flex flex-wrap items-center justify-center'>
                <h1 className="lg:text-6xl md:text-3xl mb-2 text-3xl font-semibold bg-gradient-to-bl from-black via-[#3087d1] to-black text-transparent bg-clip-text underline underline-offset-8">
  About Us
</h1>

                    <p className='lg:text-xl md:text-sm text-gray-700 text-xs p-2 md:p-3 lg:p-8 leading-4 md:leading-5 lg:leading-10'>My journey has taken me across the United Arab Emirates, Thailand, parts of Africa, and Pakistan, enriching my creative vision and expertise. Whether it's dynamic social media content, fashion and modeling shoots, immersive 360° real estate coverage, construction timelapses, stunning drone visuals, intimate portraits, food restaurant imagery, or lively corporate events, weddings, birthdays, and product shoots, I bring passion and precision to every project.<br/> Now, I'm excited to elevate my creative horizons further as I venture into Saudi Arabia through a vibrant partnership with “Slasa”, promising fresh perspectives and innovative storytelling in every frame.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About