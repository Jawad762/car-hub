import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
    <section className='w-full flex flex-row justify-between py-10 mt-4 pl-14 border-t border-gray-100 max-md:flex-col max-md:items-center max-md:pl-0 max-md:gap-6'>
        <section className='h-full flex flex-col items-left gap-4 text-gray-700'>
            <Image height={110} width={110} src='https://raw.githubusercontent.com/adrianhajdin/project_next13_car_showcase/69c984204b8be5b600c91f994da9a586fd6b7ad2/public/logo.svg'></Image>
            <div className='flex flex-col'>
               <p>Carhub 2023</p>
               <p>All Rights Reserved ©</p>
            </div>
        </section>
        <section className='h-full flex gap-24 pr-48 max-md:pr-0 max-md:gap-4 max-md:justify-center max-lg:pr-6'>
            <div className='flex flex-col items-left gap-4 max-md:text-base'>
                <p className='font-bold pb-2'>About</p>
                <p className='text-gray-600'>How it works</p>
                <p className='text-gray-600'>Featured</p>
                <p className='text-gray-600'>Partnership</p>
                <p className='text-gray-600'>Business Relation</p>
            </div>
            <div className='flex flex-col items-left gap-4'>
                <p className='font-bold pb-2'>Company</p>
                <p className='text-gray-600'>Event</p>
                <p className='text-gray-600'>Blog</p>
                <p className='text-gray-600'>Podcast</p>
                <p className='text-gray-600'>Invite a friend</p>
            </div>
            <div className='flex flex-col items-left gap-4'>
                <p className='font-bold pb-2'>Socials</p>
                <p className='text-gray-600'>Discord</p>
                <p className='text-gray-600'>Instagram</p>
                <p className='text-gray-600'>Twitter</p>
                <p className='text-gray-600'>Facebook</p>
            </div>
        </section>
    </section>

        <section className='w-full flex items-center justify-between px-14 border-t border-gray-100 py-10 max-md:px-0'>
            <p className='text-base text-gray-700 max-md:text-sm'>@2023 CarHub. All rights reserved</p>
            <div className='flex gap-4 text-base text-gray-600 max-md:text-sm'>
                <p>Privacy & Policy</p>
                <p>Terms & Condition</p>
            </div>
        </section>
    </>
  )
}

export default Footer