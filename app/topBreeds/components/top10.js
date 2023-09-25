"use client"
import React, { useState, useEffect } from 'react';
import { getTop10 } from './getTop10';
import axios from 'axios';

export const Top10 = () => {
  const [topBreedImages, setTopBreedImages] = useState([]);

  useEffect(() => {
    async function fetchTopBreedsAndImages() {
      const topSearchedBreeds = await getTop10();
      const breedImages = await fetchBreedImages(topSearchedBreeds);
      setTopBreedImages(breedImages);
    }
    fetchTopBreedsAndImages();
  }, []);

  async function fetchBreedImages(breeds) {
    try {
      // Create an array of promises for fetching breed images
      const imagePromises = breeds.map(async (breed) => {
        const res = await axios.get(
          `https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${breed.breedID}&api_key=live_AvpOFJQDCN1uusCORCQivt7Yl3ErSTJ5Sg5zRXbX26MHHUEPoN4KZ2KGaEV14q1C`
        );
        const breedData = res.data[0].breeds[0];
        return {
          breedID: breedData.id,
          breedName: breedData.name,
          imageUrl: res.data[0].url,
          breedDescription: breedData.description,
        };
      });

      // Use Promise.all to fetch images concurrently
      const breedImages = await Promise.all(imagePromises);
      return breedImages;
    } catch (err) {
      console.error("Could not fetch data", err);
      return [];
    }
  }

  return (
    <div className='sm:w-[1440px] mx-auto w-[100%]'>
      <p className="[font-family:'Montserrat-Bold',Helvetica] font-bold text-[#291507] text-[36px] mt-10 mb-20">
        Top 10 most searched breeds
      </p>
      {topBreedImages.map((cat, index) => (
        <div className='sm:flex sm:gap-28 sm:mb-14 mb-10' key={cat.breedID}>
          <img
            src={cat.imageUrl}
            alt={cat.breedName}
            className='min-w-[170px] max-w-[170px] h-[170px] rounded-[20px] object-cover shadow-[10px_10px_10px_5px_rgba(0,0,0,0.5)]'
          />
          <div className='flex flex-col mt-10 sm:mt-0'>
            <h1 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#291507] sm:text-[36px] text-[26px]">
              {index + 1}. {cat.breedName}
            </h1>
            <p className="sm:w-[888px] w-full [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#291507] text-[18px] sm:mt-0 mt-2">
              {cat.breedDescription}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
