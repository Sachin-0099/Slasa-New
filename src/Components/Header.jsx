import React from 'react';
import about from '/Images/about.png';
import logo from '/Images/logo.png';

const Header = () => {
  return (
    <div className="min-h-[60vh] w-full flex flex-col md:flex-row items-center">
      {/* Left Section - Logo & Text */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-[50vw] max-w-[500px] h-auto object-contain"
        />
        <p className="text-3xl md:text-4xl lg:text-6xl font-semibold text-transparent bg-gradient-to-bl from-[#3087D1] via-[#3087D5] to-black bg-clip-text hover:underline hover:underline-offset-8 hover:decoration-[#3087D1] text-center">
          Emad Captures
        </p>
      </div>

      {/* Right Section - About Image */}
      {/* <div className="w-full md:w-1/2">
        <img 
          src={about} 
          alt="About" 
          className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] object-cover"
        />
      </div> */}
    </div>
  );
}

export default Header;
