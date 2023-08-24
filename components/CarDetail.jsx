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
    <>
        <main className={`h-screen fixed transition-all duration-400 top-0 right-0 ${showModal ? 'w-screen' : 'w-0'}`}>
            <section className='h-full w-full bg-slate-50 flex flex-row justify-between items-center z-50 px-6 py-6 relative max-md:flex-col max-md:justify-start max-md:px-2 max-md:pt-8'>
                    <Image height={25} width={25} alt='x' onClick={() => {
                        setShowModal(false)
                        setCurrentCar({})
                    }} className='absolute left-4 top-4 cursor-pointer max-md:left-1 max-md:top-2' src='https://raw.githubusercontent.com/adrianhajdin/project_next13_car_showcase/69c984204b8be5b600c91f994da9a586fd6b7ad2/public/close.svg'></Image>
                    <Image height={600} width={800} src={`https://cdn.imagin.studio/getimage/?customer=hrjavascript-mastery&make=${currentCar.make}&modelFamily=${currentCar.model}&modelYear=${currentCar.year}&zoomType=fullscreen`}></Image>
                    <div className='w-1/3 h-full flex flex-col items-left justify-center gap-6 max-md:w-full max-md:gap-2'>
                        <h1 className='font-bold text-xl uppercase max-md:pb-4'>{currentCar.make && currentCar.make} {currentCar.model}</h1>
                        {Object.keys(currentCar).map(key => (
                            <div className='w-full flex justify-between items-center text-base pr-4'>
                                <p className='text-gray-400 capitalize'>{key.replace('_', ' ')}</p>
                                <p className='capitalize font-semibold'>{currentCar[key]}</p>
                            </div>
                        ))}
                    </div>
            </section>
        </main>
    </>
  )
}

export default CarDetail