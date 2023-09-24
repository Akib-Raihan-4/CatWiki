import React from 'react'
import Image from 'next/image'
export const Footer = () => {
  return (
    <div className='sm:w-[1440px] w-[95%] bg-black  rounded-t-[35px] mx-auto'>
        <div className='max-w-[1280px] mx-auto sm:flex block justify-between'>
            <Image src="CatwikiLogo.svg" alt='catLogo' width={140} height={100} className='sm:pt-[25px] sm:pb-[35px] ml-10 invert contrast-[150%] sm:w-[140px] sm:h-[100px] w-[100px] h-[70px]'/>
            <p className="[font-family:'Montserrat-Regular',Helvetica] font-normal text-white text-[18px]  my-auto">
            <span className='sm:mr-4 ml-10 text-[24px]'>&copy;</span> created by <span className='font-bold underline'> <a href='https://akib-raihan-portfolio.vercel.app'>
              Akib Raihan</a>
            </span> - 2023 
            </p>
        </div>
    </div>
  )
}
