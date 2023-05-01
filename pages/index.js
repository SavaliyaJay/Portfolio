import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from '@/components/HomePage'
import Portfolio from '@/components/Portfolio'
import Experience from '@/components/Experience'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
     <HomePage/>
     <Portfolio/>
     <Experience/>
    </div>
  )
}
