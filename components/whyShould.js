import React from 'react'
import {FaLongArrowAltRight} from 'react-icons/fa'
import Image from 'next/image'

export const WhyShould = () => {
  return (
    <div className="my-28">
        <div className="max-w-[1280px] mx-auto flex">
            <div className='w-[455px] mt-20 mr-48'>
                <div className="w-[67px] h-[3px] bg-[#4d270c] rounded-[77px] mb-4"/>
                <h1 className="[font-family:'Montserrat-Bold',Helvetica] font-bold text-[#291506] text-[48px] tracking-[0px] leading-[55px]">
                    Why should you have a cat ?
                </h1>
                <p className="w-[395px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-[#291507] text-[18px] tracking-[0] leading-normal my-14">
                Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves.
                </p>
                <a className='flex items-end  ' href='#'>
                    <p className="[font-family:'Montserrat-Bold',Helvetica] font-semibold text-[#29150799] text-[18px] pr-2  ">READ MORE </p>
                    <FaLongArrowAltRight color='#29150799' size={28}  />
                </a>
            </div>
            <div className="w-[580px] columns-2">
                <Image src="/image2.png" width={1000} height={1000} className='w-[274px] h-[167.084px] mb-6'/>
                <Image src="/image1.png" width={1000} height={1000} className='w-[195.5px] h-[294px] ml-[75px]'/>
                <Image src="/image3.png" width={1000} height={1000} className='w-[238.471px] h-[385.868px]'/>
            </div>
        </div>
    </div>
  )
}
