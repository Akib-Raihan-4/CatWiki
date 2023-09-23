import React from 'react';

export const Ratings = ({ rating }) => {
  const filledStars = Math.floor(rating);


  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <div key={i} className="w-[60px] h-[12px] bg-[#544439] rounded-[8px] "/>
    );
  }

  

  while (stars.length < 5) {
    stars.push(
      <div key={stars.length} className="w-[60px] h-[12px] bg-[#e0e0e0] rounded-[8px] "/>
    );
  }

  return <div className="flex gap-7">{stars}</div>;
};