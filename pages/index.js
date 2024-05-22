import HomePage from '@/components/HomePage'
import Portfolio from '@/components/Portfolio'
import Experience from '@/components/Experience'
import Me from '@/components/Me'
import Contact from '@/components/Contact'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='bg-[#f3e8ff]'>
      <Head>
        <title>Jay - Portfolio</title>
      </Head>
      <HomePage />
      <Portfolio />
      <Experience />
      <Me />
      <Contact />
    </div>
  )
}
