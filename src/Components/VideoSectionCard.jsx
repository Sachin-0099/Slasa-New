import React from 'react';

const VideoSectionCard = ({ PhotoData, title, width, Description }) => {
  return (
    <div className="h-full w-screen lg:mb-10 md:mb-5 mb-2 flex flex-col items-center">
      <h1 className="relative text-transparent bg-gradient-to-r from-[#3087D1] via-[#3087D5] to-black bg-clip-text font-bold lg:text-6xl md:text-4xl text-3xl text-center font-semibold hover:underline hover:underline-offset-8 hover:decoration-[#3087D1]">
        <span
          className={`hidden lg:inline-block absolute bottom-0 lg:w-[${width}] h-[4px] bg-gradient-to-r from-[#3087D1] via-[#3087D5] to-black mt-[20vh]`}
        ></span>
        {title}
      </h1>

      {Description.map((desc, index) => (
        <p key={index} className="lg:px-10 lg:mx-50 md:mx-30 lg:py-5 py-2 mx-5 text-gray-500 md:text-xl text-sm lg:text-xl">
          {desc.description}
        </p>
      ))}

      <div className="h-full w-full flex items-center justify-center">
        <div className="h-[60%] lg:w-[70%] md:w-[70%] w-[90%] mt-8 flex flex-wrap lg:flex-row md:flex-row sm:flex-col items-center justify-around gap-12  ">
          {PhotoData.map((photo, index) => {
            // Ensure correct YouTube embed URL
            const videoSrc = photo.src.startsWith('https://www.youtube.com/embed/') 
              ? photo.src 
              : `https://www.youtube.com/embed/${new URL(photo.src).searchParams.get('v')}`;

            return (
              <div key={index} className="lg:h-[40vh] lg:w-[40vh] md:h-[30vh] md:w-[40vh] h-[20vh] w-[18vh]">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src={videoSrc}
                  title={`YouTube Video ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>

      {Description.map((des, index) => (
        <div key={index} className="w-[40%] h-[10%] flex lg:py-10 md:py-12 sm:py-11 mt-10 px-4 items-center justify-center my-[-20]">
          <img src={des.icon} alt="icon" className="lg:w-[10vh] md:w-[80h] w-[5vh]" />
          <a
            href={des.link.startsWith("http") ? des.link : `https://${des.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-600 text-cyan-500 px-5 lg:text-2xl md:text-2xl text-md hover:underline hover:underline-offset-8 hover:decoration-[#3087D1]"
          >
            {des.link}
          </a>
        </div>
      ))}
    </div>
  );
};

export default VideoSectionCard;
