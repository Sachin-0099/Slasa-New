import React from 'react';
import { useTranslation } from 'react-i18next';

const PhotoSectionCard = ({ PhotoData, title, width, Description }) => {
     const { t, i18n } = useTranslation(); 
  return (
    <div className='h-full w-screen lg:mb-10 md:mb-5 mb-2 flex flex-col items-center'>
      <h1 className='relative text-transparent bg-gradient-to-r from-[#3087D1] via-[#3087D5] to-black bg-clip-text font-bold lg:text-6xl md:text-4xl text-3xl text-center font-semibold hover:underline hover:underline-offset-8 hover:decoration-[#3087D1]'>
      {t(title)}
      </h1>
      
      {Description.map((desc, index) => (
        <p key={index} className='lg:px-10 lg:mx-50 md:mx-30 lg:py-5 py-2 mx-5 text-gray-500 md:text-xl text-sm lg:text-xl text-center'>
        {t(desc.description)}
        </p>
      ))}
      
      <div className='h-full w-full flex items-center justify-center'>
        <div className='h-[80%] lg:w-[70%] md:w-[70%] w-[90%] mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
          {PhotoData.map((photo, index) => (
            <div key={index} className='lg:h-[30vh] lg:w-[40vh] md:h-[25vh] md:w-[40vh] h-[25vh] w-[22vh] flex justify-center items-center'>
              <img src={photo.src} className='h-full w-full object-cover' alt='Photo' />
            </div>
          ))}
        </div>
      </div>

      {/* Adjusted Instagram link placement */}
      {Description.map((des, index) => (
        <div key={index} className='w-full flex flex-row items-center justify-center mt-10 mb-10'>
          <img src={des.icon} alt='Icon' className='lg:w-[10vh] md:w-[8vh] w-[5vh] mb-3' />
          <a
            href={des.link.startsWith('http') ? des.link : `https://${des.link}`}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-cyan-600 text-cyan-500 px-5 lg:text-2xl md:text-2xl text-md text-center'
          >
            {des.link.replace('https://', '')}
          </a>
        </div>
      ))}
    </div>
  );
};

export default PhotoSectionCard;
