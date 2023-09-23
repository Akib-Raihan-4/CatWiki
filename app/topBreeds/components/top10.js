"use client"
import React, {useState,useEffect} from 'react'
import { getTop10 } from './getTop10';
import axios from 'axios';

export const Top10 = () => {
  const [topBreeds, setTopBreeds] = useState([]);
  const [topBreedImages, setTopBreedImages] = useState([])

  useEffect(() => {
    async function fetchTopBreedsAndImages() {
      const topSearchedBreeds = await getTop10();
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
        const breedDescription = res.data[0].breeds[0].description
        

        const breedImages={
          breedID,
          breedName,
          imageUrl,
          breedDescription
        }
        newTopBreedImages.push(breedImages)
        }catch(err){
          console.log({Message:"Could not fetch data"})
      }
    }
    setTopBreedImages(newTopBreedImages)
    console.log(topBreedImages)
  }
  return (
    <div className='max-w-[1440px]  mx-auto'>
        <p className="[font-family:'Montserrat-Bold',Helvetica] font-bold text-[#291507] text-[36px] mt-10 mb-20">
        Top 10 most searched breeds
      </p>
        {topBreedImages.map((cat,index)=>(
          <div className='flex gap-28 mb-14'>
            {/* {console.log(index+1)} */}
            <img src={cat.imageUrl} key={index} className='min-w-[170px] max-w-[170px] h-[170px] rounded-[20px] object-cover shadow-[10px_10px_10px_5px_rgba(0,0,0,0.5)]'/>
            <div className="flex flex-col">
                <h1 className="[font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#291507] text-[36px]">{index+1}.{" "}{cat.breedName}</h1>
                <p className="w-[888px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#291507] text-[18px]">{cat.breedDescription}</p>
            </div>
          </div>
         
        ))}
    </div>
  )
}
