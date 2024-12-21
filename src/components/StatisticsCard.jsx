import React from 'react';

const StatisticsCard = ({ number, title, description }) => {
  return (
    <div className=" p-6  text-center border-1 border-r border-b border-lightBlue">
      <h3 className="text-6xl font-bold text-secondary mb-2">{number}</h3>
      <h4 className="text-2xl font-semibold text-customBlue mb-1">{title}</h4>
      <p className="text-lightGray2 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default StatisticsCard;

