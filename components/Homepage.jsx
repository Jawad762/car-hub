'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import { AppContext } from './Context'

const Homepage = () => {
  const {handleExploreCars} = useContext(AppContext)
  return (
    <main className='flex flex-row justify-between w-full pb-16 mt-16 max-md:flex-col max-md:pb-0 max-md:gap-8 max-sm:gap-2'>
        <div className='relative flex flex-col w-1/2 gap-6 items-left left-16 max-md:w-full max-lg:w-1/2 max-lg:left-4'>
            <h1 className='w-1/2 text-6xl font-bold leading-relaxed max-sm:w-2/3 max-md:w-full max-lg:text-4xl max-lg:w-full'>Find, book, rent a car—quick and super easy!</h1>
            <p className='w-9/12 text-3xl'>Streamline your car rental experience with our effortless booking process.</p>
            <button onClick={handleExploreCars} className="px-6 py-3 mt-2 text-lg text-white bg-blue-600 rounded-full w-fit">Explore Cars</button>
        </div>
        <div className='max-lg:relative max-md:h-[50vh] max-lg:w-full overflow-x-hidden'>
          <Image height={1000} width={1000} className='absolute w-full h-screen overflow-hidden -top-24 -right-1/2 bg-hero-bg -z-10 max-md:top-0 max-md:-right-52 max-md:rotate-12 max-md:overflow-hidden max-md:h-full max-lg:h-5/6 max-lg:-right-32' src='https://raw.githubusercontent.com/adrianhajdin/project_next13_car_showcase/main/public/hero-bg.png'/>
          <Image height={1000} width={1000} className='h-4/6 w-[55%] absolute right-0 top-28 max-md:h-[85%] max-md:w-[70%] max-sm:w-10/12 max-sm:h-[50%] max-sm:top-40 max-sm:right-8 max-md:right-4 max-md:top-14 max-lg:h-auto max-lg:w-auto max-lg:top-8' src='https://github.com/adrianhajdin/project_next13_car_showcase/blob/main/public/hero.png?raw=true'></Image>
        </div>
        
    </main>
  )
}

export default Homepage