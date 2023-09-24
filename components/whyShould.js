import React from 'react'
import {FaLongArrowAltRight} from 'react-icons/fa'
import Image from 'next/image'

export const WhyShould = () => {
  return (
    <div className="my-28">
        <div className="max-w-[1280px] mx-auto sm:flex">
            <div className='sm:w-[455px] w-[100%] mt-20 mr-48'>
                <div className="sm:w-[67px] w-[51px] h-[3px] bg-[#4d270c] rounded-[77px] mb-4"/>
                <h1 className="[font-family:'Montserrat-Bold',Helvetica] font-bold text-[#291506] sm:text-[48px] text-[42px]  leading-[55px]">
                    Why should you have a cat ?
                </h1>
                <p className="sm:w-[395px] w-[100%] [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#291507] text-[18px] tracking-[0] leading-normal sm:my-14  mt-16">
                Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves.
                </p>
                <a className='flex items-end ' href='https://www.freshpet.com/blog/10-reasons-why-cats-make-great-pets' target='blank'>
                    <p className="[font-family:'Montserrat-Bold',Helvetica] font-semibold text-[#29150799] text-[18px] pr-2 mt-6 sm:mt-0">READ MORE </p>
                    <FaLongArrowAltRight color='#29150799' size={28}  />
                </a>
            </div>
            <div className="sm:w-[580px] w-full columns-2 mt-20 sm:mt-0">
                <Image src="/image2.png" width={1000} height={1000} className='sm:w-[274px] sm:h-[167.084px]  w-[272px] h-[130px] sm:mb-6 mb-[14px]'/>
                <Image src="/image1.png" width={1000} height={1000} className='sm:w-[195.5px] sm:h-[294px] w-[143px] h-[220px] sm:ml-[75px] ml-[34px]'/>
                <Image src="/image3.png" width={1000} height={1000} className='sm:w-[238.471px] sm:h-[385.868px] w-[186px] h-[300px]'/>
            </div>
        </div>
    </div>
  )
}
