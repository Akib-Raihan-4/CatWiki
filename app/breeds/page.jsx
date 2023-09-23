"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'

const Breeds = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('id')
  console.log(search)
  return (
    <div>
        <h1>Breeds</h1>
    </div>
  )
}

export default Breeds