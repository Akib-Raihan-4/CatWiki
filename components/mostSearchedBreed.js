"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { getTopSearchedBreeds } from './getTopSearchedBreeds';

export default function MostSearchedBreed() {
  const [topBreedImages, setTopBreedImages] = useState([]);

  useEffect(() => {
    async function fetchTopBreedsAndImages() {
      const topSearchedBreeds = await getTopSearchedBreeds();
      const breedImages = await fetchBreedImages(topSearchedBreeds);
      setTopBreedImages(breedImages);
    }
    fetchTopBreedsAndImages();
  }, []);

  async function fetchBreedImages(breeds) {
    try {
      const imagePromises = breeds.map(async (breed) => {
        const res = await axios.get(
          `https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${breed.breedID}&api_key=live_AvpOFJQDCN1uusCORCQivt7Yl3ErSTJ5Sg5zRXbX26MHHUEPoN4KZ2KGaEV14q1C`
        );
        const breedData = res.data[0].breeds[0];
        return {
          breedID: breedData.id,
          breedName: breedData.name,
          imageUrl: res.data[0].url,
        };
      });

      const breedImages = await Promise.all(imagePromises);
      return breedImages;
    } catch (err) {
      console.error("Could not fetch data", err);
      return [];
    }
  }

  return (
    <div className='sm:max-w-[1280px] w-full grid sm:grid-cols-4 grid-cols-2 mx-auto mt-14 sm:gap-[140px] sm:gap-x-[65px] pb-[22px]'>
      {topBreedImages.map((cat, index) => (
        <div className='flex flex-col justify-center' key={cat.breedID}>
          <Link
            href={{
              pathname: '/breeds/',
              query: {
                id: cat.breedID,
              },
            }}
          >
            <img
              src={cat.imageUrl}
              alt={cat.breedName}
              className='sm:w-[220px] w-[135px] sm:h-[220px] h-[135px] rounded-[20px] mx-auto shadow-[10px_10px_10px_5px_rgba(0,0,0,0.5)]'
            />
          </Link>
          <p className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#291507] text-[18px] mt-4 sm:mb-32 mb-[45px] mx-auto h-fit">
            {cat.breedName}
          </p>
        </div>
      ))}
    </div>
  );
}

