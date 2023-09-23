"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { CatBreed } from './components/catBreed'

const Breeds = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('id')
  console.log(search)
  return (
    <div className="w-[1440px] mx-auto">
        <CatBreed breedID={search}/>
    </div>
  )
}

export default Breeds                                                                                                                          