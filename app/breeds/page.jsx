"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { CatBreed } from './components/catBreed'

const Breeds = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('id')
  console.log(search)
  return (
    <div className="sm:w-[1440px] mx-auto w-[95%]">
        <CatBreed breedID={search}/>
    </div>
  )
}

export default Breeds                                                                                                                          