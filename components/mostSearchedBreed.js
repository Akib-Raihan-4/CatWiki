"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'

import { getTopSearchedBreeds } from './getTopSearchedBreeds'; // Import the function to fetch top breeds

export default function MostSearchedBreed() {
  const [topBreeds, setTopBreeds] = useState([]);
  const [topBreedImages, setTopBreedImages] = useState([])

  useEffect(() => {
    async function fetchTopBreedsAndImages() {
      const topSearchedBreeds = await getTopSearchedBreeds();
      // console.log(topSearchedBreeds)
      const breedImages = await fetchBreedImages(topSearchedBreeds);

      // Assuming fetchBreedImages is a function that fetches breed images based on breed names
      setTopBreeds(breedImages);
    }
    fetchTopBreedsAndImages();
  }, []);

  async function fetchBreedImages(breeds) {
    const newTopBreedImages = []
    for (const breed of breeds) 
    {
      try 
      {
        // console.log(breed.breedID)
        const res = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${breed.breedID}&api_key=live_AvpOFJQDCN1uusCORCQivt7Yl3ErSTJ5Sg5zRXbX26MHHUEPoN4KZ2KGaEV14q1C`);
        const breedName = res.data[0].breeds[0].name
        const imageUrl = res.data[0].url
        const breedID = res.data[0].breeds[0].id
        

        const breedImages={
          breedID,
          breedName,
          imageUrl
        }
        newTopBreedImages.push(breedImages)
        }catch(err){
          console.log({Message:"Could not fetch data"})
      }
    }
    setTopBreedImages(newTopBreedImages)
  }
  // console.log(topBreedImages)
  return (
    <div className='sm:max-w-[1280px] w-full grid sm:grid-cols-4 grid-cols-2 mx-auto mt-14 sm:gap-[140px] sm:gap-x-[65px] pb-[22px]'>
        {topBreedImages.map((cat,index)=>(
          <div className='flex flex-col justify-center'>
            <Link
              href = {{
                pathname: '/breeds/',
                query: {
                  id: cat.breedID
                }
              }}
            >
              <img src={cat.imageUrl} key={index} className='sm:w-[220px] w-[135px] sm:h-[220px] h-[135px] rounded-[20px] mx-auto shadow-[10px_10px_10px_5px_rgba(0,0,0,0.5)]'/>
            </Link>
            <p className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#291507] text-[18px] mt-4 sm:mb-32 mb-[45px] mx-auto h-fit">{cat.breedName}</p>
          </div>
         
        ))}
    </div>
  )
}
