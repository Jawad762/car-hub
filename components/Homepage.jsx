'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import { AppContext } from './Context'

const Homepage = () => {
  const {handleExploreCars} = useContext(AppContext)
  return (
    <main className='flex flex-row w-full justify-between mt-16 pb-16 max-md:flex-col max-md:pb-0 max-md:gap-8 max-sm:gap-2'>
        <div className='flex flex-col items-left w-1/2 relative left-16 gap-6 max-md:w-full max-lg:w-1/2 max-lg:left-4 max-lg:left-4'>
            <h1 className='font-bold text-6xl w-1/2 leading-relaxed max-sm:w-1/2 max-md:w-full max-lg:text-4xl'>Find, book, rent a car—quick and super easy!</h1>
            <p className='text-3xl w-9/12'>Streamline your car rental experience with our effortless booking process.</p>
            <button onClick={handleExploreCars} className="bg-blue-600 text-white rounded-full py-3 px-6 w-fit mt-2 text-lg">Explore Cars</button>
        </div>
        <div className='max-md:relative max-md:h-[50vh] max-md:w-full max-lg:overflow-hidden'>
          <Image height={1000} width={1000} className='absolute -top-24 -right-1/2 bg-hero-bg -z-10 w-full h-screen overflow-hidden max-md:top-0 max-md:-right-52 max-md:rotate-12 max-md:overflow-hidden max-md:h-full max-lg:h-[55%]' src='https://raw.githubusercontent.com/adrianhajdin/project_next13_car_showcase/main/public/hero-bg.png'/>
          <Image height={1000} width={1000} className='h-4/6 w-[55%] absolute right-0 top-28 max-md:h-[85%] max-md:w-[70%] max-sm:h-[55%] max-sm:top-40 max-sm:right-8 max-md:right-4 max-md:top-14 max-lg:h-[35%] max-lg:w-[60%] max-lg:top-32' src='https://github.com/adrianhajdin/project_next13_car_showcase/blob/main/public/hero.png?raw=true'></Image>
        </div>
        
    </main>
  )
}

export default Homepage