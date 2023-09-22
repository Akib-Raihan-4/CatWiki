import Header from '@/components/header'
import { WhyShould } from '@/components/whyShould'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-[1440px] mx-auto h-[10000px]'>
      <Header/>
      <WhyShould/>
    </div>
  )
}
