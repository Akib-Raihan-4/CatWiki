import React from 'react'
import Image from 'next/image'
import './headers.css'
import  {Search}  from './search'
import  MostSearchedBreed  from './mostSearchedBreed'
import {FaLongArrowAltRight} from 'react-icons/fa'

export default function Header() {
  return (
    <div className='w-[100%]'> 
        {/* h-[620px] */}
        <div className='relative '>
            <Image src='/HeroImagelg.png' width={1440} height={100} className='rounded-t-[35px] sm:h-[550px] sm:w-[1440px] w-screen h-[200px] mx-auto'/>
            <div className='absolute sm:top-28 sm:left-24 top-4 left-5 text-white'>
                <Image src="CatwikiLogo.svg" alt='catLogo' width={300} height={100} className=' invert contrast-[150%] mb-3 sm:w-[300px] sm:h-[100px] w-[150px] h-[50px]'/>
                <p className="max-w-[80%] [font-family:'Montserrat-Medium',Helvetica] font-medium text-white sm:text-[27px] text-[12px]">Get to know more about your cat breed</p>
                <Search/>
            </div>
        </div>
        <div className='bg-[#e4e4dc] rounded-b-[35px] '>
            <p className="[font-family:'Montserrat-Medium',Helvetica] font-medium text-[#291507] sm:text-[18px] text-[12px] pt-8 sm:pl-20 pl-5">Most Searched Breeds</p>
            <div className='bg-[#4d270c] rounded-[77px] sm:w-[59px] w-[37px] h-[3px] sm:ml-20 ml-5'/>
            <div className='mt-8 sm:ml-20 ml-5 flex justify-between sm:w-[1200px]'>
                <h1 className="[font-family:'Montserrat-Bold',Helvetica] font-bold text-[#291506] sm:text-[48px] text-[18px] tracking-[0] leading-[normal] sm:w-[537px] w-[185px] ">66+ Breeed For you to discover</h1>
                <a className='flex items-end justify-evenly pr-2' href='/topBreeds'>
                    <p className="[font-family:'Montserrat-Bold',Helvetica] font-semibold text-[#29150799] sm:text-[18px] text-[14px] pr-2  ">SEE MORE </p>
                    <FaLongArrowAltRight color='#29150799' className='icon'  />
                </a>
            </div>
            <MostSearchedBreed/>
        </div>
    </div>
  )
}
