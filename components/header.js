import React from 'react'
import Image from 'next/image'
import './headers.css'
import  {Search}  from './search '
import  MostSearchedBreed  from './mostSearchedBreed'
import {FaLongArrowAltRight} from 'react-icons/fa'

export default function Header() {
  return (
    <div className='w-[100%]'>
        <Image src="CatwikiLogo.svg" alt='catLogo' width={140} height={100} className='py-[20px]'/>
        {/* h-[620px] */}
        <div className='relative '>
            <Image src='/HeroImagelg.png' width={1440} height={0} className='rounded-t-[35px]'/>

            <div className='absolute top-28 left-24 text-white'>
                <Image src="CatwikiLogo.svg" alt='catLogo' width={300} height={100} className=' invert contrast-[150%] mb-3'/>
                <p className="max-w-[80%] [font-family:'Montserrat-Medium',Helvetica] font-medium text-white text-[27px]">Get to know more about your cat breed</p>
                <Search/>
            </div>
        </div>
        <div className='bg-[#e4e4dc] rounded-b-[35px] '>
            <p className="[font-family:'Montserrat-Medium',Helvetica] font-medium text-[#291507] text-[18px] pt-8 pl-20">Most Searched Breeds</p>
            <div className='bg-[#4d270c] rounded-[77px] w-[59px] h-[3px] ml-20'></div>
            <div className='mt-8 ml-20 flex justify-between w-[1200px]'>
                <h1 className="[font-family:'Montserrat-Bold',Helvetica] font-bold text-[#291506] text-[48px] tracking-[0] leading-[normal] max-w-[42%]">66+ Breeed For you to discover</h1>
                <a className='flex items-end justify-evenly ' href='#'>
                    <p className="[font-family:'Montserrat-Bold',Helvetica] font-semibold text-[#29150799] text-[18px] pr-2  ">SEE MORE </p>
                    <FaLongArrowAltRight color='#29150799' size={28}  />
                </a>
            </div>
            <MostSearchedBreed/>
        </div>
    </div>
  )
}
