"use server"
import React from 'react'
import axios from 'axios'
import Image from 'next/image'

async function catData() {
  try{
    const res = await axios.get("https://api.thecatapi.com/v1/images/search?limit=4&api_key=live_AvpOFJQDCN1uusCORCQivt7Yl3ErSTJ5Sg5zRXbX26MHHUEPoN4KZ2KGaEV14q1C")
    // console.log(res)
    return res.data
  }catch(err){
    console.log({Message:"Could not fetch data"})
  }
}

export default async function MostSearchedBreed() {
  const catImage = await catData()
  return (
    <div className='flex justify-evenly'>
        {catImage.map((cat,index)=>(
          <img src={cat.url} key={index} className='w-[220px] h-[220px] rounded-[20px]' />
        ))}
    </div>
  )
}