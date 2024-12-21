import React from 'react';

const ImageCard = ({ images }) => {
  return (
    <>
      {images.map((src, index) => (
        <div key={index} className="border border-lightBlue flex items-center justify-center p-3">
          <img src={src} width={100} height={100} alt={`Image ${index + 1}`} />
        </div>
      ))}
  </>);
};

export default ImageCard;