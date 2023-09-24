import React from 'react'
import Image from 'next/image'
export const Nav = () => {
  return (
    <div className='sm:w-[1440px] mx-auto w-[95%] '>
        <Image src="CatwikiLogo.svg" alt='catLogo' width={140} height={100} className='py-[20px] sm:w-[140px] sm:h-[100px] w-[100px] h-[80px]'/>
    </div>
  )
}
