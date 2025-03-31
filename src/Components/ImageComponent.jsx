import React from 'react';

const ImageComponent = ({ src, alt = 'image', className = '' }) => {
  return (
    <div className={`w-full h-auto mt-10 ${className}`}>
      <img src={src} alt={alt} className='w-full' />
    </div>
  );
};

export default ImageComponent;