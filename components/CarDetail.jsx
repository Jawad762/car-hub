'use client'
import React, { useContext, useEffect } from 'react'
import {AppContext} from './Context'
import Image from 'next/image'

const CarDetail = () => {
    const {currentCar, setShowModal, showModal, setCurrentCar} = useContext(AppContext)

    useEffect(() => {
        if (showModal) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }

        // Cleanup: Reset overflow when component unmounts
        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, [showModal]); 

  return (
        <main className={`fixed top-0 right-0 flex justify-center items-center transition-all duration-400 w-full h-full ${showModal ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} overflow-scroll`}>
            <section className='relative z-50 flex flex-row items-center justify-between w-full h-full px-6 py-6 bg-slate-50 max-lg:flex-col max-lg:justify-start max-lg:px-2 max-lg:pt-8 max-sm:pt-10 max-sm:py-0 max-sm:overflow-hidden'>
                    <Image height={25} width={25} alt='x' onClick={() => {
                        setShowModal(false)
                        setCurrentCar({})
                    }} className='absolute cursor-pointer left-4 top-4 max-lg:left-1 max-lg:top-2' src='https://raw.githubusercontent.com/adrianhajdin/project_next13_car_showcase/69c984204b8be5b600c91f994da9a586fd6b7ad2/public/close.svg'></Image>
                    <Image height={600} width={800} src={`https://cdn.imagin.studio/getimage/?customer=hrjavascript-mastery&make=${currentCar.make}&modelFamily=${currentCar.model}&modelYear=${currentCar.year}&zoomType=fullscreen`}></Image>
                    <div className='flex flex-col justify-center w-1/3 h-full gap-6 items-left max-lg:w-full max-sm:gap-4 max-lg:gap-2'>
                        <h1 className='text-xl font-bold uppercase max-lg:pb-4'>{currentCar.make && currentCar.make} {currentCar.model}</h1>
                        {Object.keys(currentCar).map(key => (
                            <div className='flex items-center justify-between w-full pr-4 text-base'>
                                <p className='text-gray-400 capitalize'>{key.replace('_', ' ')}</p>
                                <p className='font-semibold capitalize'>{currentCar[key]}</p>
                            </div>
                        ))}
                    </div>
            </section>
        </main>
  )
}

export default CarDetail