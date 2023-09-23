import Header from '@/components/header'
import { WhyShould } from '@/components/whyShould'
import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'


export default function Home() {
  return (
    <div className='w-[1440px] mx-auto '>
      
      <Header/>
      <WhyShould/>
      
    </div>
  )
}
