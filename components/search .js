"use client"
import React from 'react'
// import { TextInput } from 'flowbite-react';
import {BiSearch} from 'react-icons/bi'

export const Search  = () => {
  return (
    <div className='text-white w-[80%] mt-8'>
      <div className="relative">
        <input
          type="text"
          placeholder="Enter your breed"
          className='absolute w-full rounded-[50px] h-[50px]'
        />
        <button className='text-black absolute right-4 top-0 bottom-0 translate-y-4'>
          <BiSearch size={20} />
        </button>
      </div>
      
    </div>
  )
}
