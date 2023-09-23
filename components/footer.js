import React from 'react'
import Image from 'next/image'
export const Footer = () => {
  return (
    <div className='w-[1440px] bg-black  rounded-t-[35px] mx-auto'>
        <div className='max-w-[1280px] mx-auto flex justify-between'>
            <Image src="CatwikiLogo.svg" alt='catLogo' width={140} height={100} className='pt-[25px] pb-[35px] invert contrast-[150%]'/>
            <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[18px] my-auto">
            <span className='mr-4'>&copy;</span> created by <span className='font-bold underline'>Akib Raihan</span> - 2023 
            </p>
        </div>
    </div>
  )
}
