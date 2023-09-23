import React from 'react'
import Image from 'next/image'
export const Nav = () => {
  return (
    <div className='w-[1440px] mx-auto'>
        <Image src="CatwikiLogo.svg" alt='catLogo' width={140} height={100} className='py-[20px]'/>
    </div>
  )
}
