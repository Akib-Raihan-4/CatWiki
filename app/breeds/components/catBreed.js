import React, { useEffect, useState } from 'react';

const StarRating = ({ rating }) => {
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




export const CatBreed = ({ breedID }) => {
  const [catImages, setCatImages] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        // Make an API request to fetch cat images
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${breedID}&api_key=live_AvpOFJQDCN1uusCORCQivt7Yl3ErSTJ5Sg5zRXbX26MHHUEPoN4KZ2KGaEV14q1C`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch cat images');
        }

        const data = await response.json();
        setCatImages(data);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <div className='mt-10 w-[1380px] mx-auto'>
      {catImages.length > 0 && (
        
        <div className='flex'>
          {console.log(catImages[0].breeds[0].child_friendly)}
          <div className='relative mr-40'>
            <img
              key={catImages[0].id}
              src={catImages[0].url}
              alt={`Cat Image ${catImages.id}`}
              className="w-[371px] h-[371px] object-cover rounded-[25px] relative shadow-[10px_10px_10px_5px_rgba(0,0,0,0.5)]"
            />
            {/* <div className='w-[84px] h-[315px] bg-[#dec68a] rounded-[14px] -z-10 absolute top-[25px] -left-3'/> */}
          </div>
          <div>
            <h1 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#291507] text-[36px]">
              {catImages[0].breeds[0].name}
            </h1>
            <p className="w-[601px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#291507] text-[18px] my-6">{catImages[0].breeds[0].description}</p>
            <p className="[font-family:'Montserrat-Bold',Helvetica] font-normal text-black text-[16px] mb-6">
              <span className="font-bold">Temperament: </span>
              <span className="[font-family:'Montserrat-Medium',Helvetica] font-medium">
                {catImages[0].breeds[0].temperament}
              </span>
            </p>
            <p className="[font-family:'Montserrat-Bold',Helvetica] font-normal text-black text-[16px] mb-6">
              <span className="font-bold">Origin: </span>
              <span className="[font-family:'Montserrat-Medium',Helvetica] font-medium">
                {catImages[0].breeds[0].origin}
              </span>
            </p>
            <p className="[font-family:'Montserrat-Bold',Helvetica] font-normal text-black text-[16px] mb-6">
              <span className="font-bold">Life Span: </span>
              <span className="[font-family:'Montserrat-Medium',Helvetica] font-medium">
                {catImages[0].breeds[0].life_span} years
              </span>
            </p>

            {/* Bars are here */}
            <p className="[font-family:'Montserrat-Bold',Helvetica] font-normal text-black text-[16px] mb-6 flex">
              <span className="font-bold block w-[180px]">Adaptibility: </span>
              <StarRating rating={catImages[0].breeds[0].adaptability}/>
            </p>
            <p className="[font-family:'Montserrat-Bold',Helvetica] font-normal text-black text-[16px] mb-6 flex">
              <span className="font-bold block w-[180px]">Affection level: </span>
              <StarRating rating={catImages[0].breeds[0].affection_level}/>
            </p>
            <p className="[font-family:'Montserrat-Bold',Helvetica] font-normal text-black text-[16px] mb-6 flex">
              <span className="font-bold block w-[180px]">Child Friendly: </span>
              <StarRating rating={catImages[0].breeds[0].child_friendly}/>
            </p>
            <p className="[font-family:'Montserrat-Bold',Helvetica] font-normal text-black text-[16px] mb-6 flex">
              <span className="font-bold block w-[180px]">Grooming: </span>
              <StarRating rating={catImages[0].breeds[0].grooming}/>
            </p>
            <p className="[font-family:'Montserrat-Bold',Helvetica] font-normal text-black text-[16px] mb-6 flex">
              <span className="font-bold block w-[180px]">Intelligent: </span>
              <StarRating rating={catImages[0].breeds[0].intelligence}/>
            </p>
            <p className="[font-family:'Montserrat-Bold',Helvetica] font-normal text-black text-[16px] mb-6 flex">
              <span className="font-bold block w-[180px]">Health issues: </span>
              <StarRating rating={catImages[0].breeds[0].health_issues}/>
            </p>
            <p className="[font-family:'Montserrat-Bold',Helvetica] font-normal text-black text-[16px] mb-6 flex">
              <span className="font-bold block w-[180px]">Social needs: </span>
              <StarRating rating={catImages[0].breeds[0].social_needs}/>
            </p>
            <p className="[font-family:'Montserrat-Bold',Helvetica] font-normal text-black text-[16px] mb-6 flex">
              <span className="font-bold block w-[180px]">Stranger friendly: </span>
              <StarRating rating={catImages[0].breeds[0].stranger_friendly}/>
            </p>

          </div>
        </div>
      )}
      
    </div>
  );
};
