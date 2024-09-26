import React from 'react';

const DentalInfoCard = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-teal-600 shadow-md rounded-lg p-6 text-center flex flex-col items-center">
      <img src={imgSrc} alt={title} className="w-16 h-16 mb-4 text-white" />
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white font-lato font-bold">{description}</p>
    </div>
  );
};

export default DentalInfoCard;
