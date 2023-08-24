'use client'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { AppContext } from './Context'

const Card = ({car}) => {

    const [showButton, setShowButton] = useState(false)
    const {showModal, handleClick} = useContext(AppContext)

    return (
        <div onMouseOver={() => setShowButton(true)} onMouseLeave={() => setShowButton(false)} className='z-1 relative flex flex-col items-left text-xl gap-2 px-4 pt-4 rounded-3xl bg-slate-50 py-6 hover:bg-white hover:shadow-xl'>
        {/* Card Content Parameters */}
        <p className='font-semibold text-2xl uppercase'>{car.make} {car.model}</p>
        <div className='relative flex justify-center items-center w-14 mt-2'>
            <p className='text-3xl font-bold'>52</p>
            <p className='absolute -top-1 left-0.5 text-base'>$</p>
            <p className='absolute -right-4 -bottom-1 text-sm'>/day</p>
        </div>
        <div className='w-full h-full flex justify-center items-center pt-2'>
            <Image height={250} width={250} src={`https://cdn.imagin.studio/getimage/?customer=hrjavascript-mastery&make=${car.make.toLowerCase()}&modelFamily=${car.model.toLowerCase()}&modelYear=${car.year}&zoomType=fullscreen`}></Image>
        </div>
        {!showButton ? (
            <div className='flex justify-between items-center w-full pt-6 px-2'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <Image height={20} width={20} src='https://raw.githubusercontent.com/adrianhajdin/project_next13_car_showcase/69c984204b8be5b600c91f994da9a586fd6b7ad2/public/steering-wheel.svg'></Image>
                    <p className='text-sm'>Automatic</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <Image height={20} width={20} src='https://raw.githubusercontent.com/adrianhajdin/project_next13_car_showcase/69c984204b8be5b600c91f994da9a586fd6b7ad2/public/tire.svg'></Image>
                    <p className='text-sm'>{car.drive && car.drive.toUpperCase() || 'FWD'}</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <Image height={20} width={20} src='https://raw.githubusercontent.com/adrianhajdin/project_next13_car_showcase/69c984204b8be5b600c91f994da9a586fd6b7ad2/public/gas.svg'></Image>
                    <p className='text-sm'>{car.combination_mpg} MPG</p>
                </div>
            </div>
        ) : (
            <button onClick={() => handleClick(car)} className='w-full flex justify-around items-center bg-blue-700 rounded-2xl py-3 mt-6'>
                <p></p>
                <p className='text-sm text-white'>View More</p>
                <Image height={25} width={25} src='https://raw.githubusercontent.com/adrianhajdin/project_next13_car_showcase/69c984204b8be5b600c91f994da9a586fd6b7ad2/public/right-arrow.svg'></Image>
            </button>
        )
        }
        {/* Card Content Parameters */}
    </div>
  )
}

export default Card