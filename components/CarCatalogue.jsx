'use client'
import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import Card from './Card'
import CarDetail from './CarDetail'
import getData from './Data'
import { AppContext } from './Context'
import { manufacturers } from '@/constants'


const CarCatalogue = () => {

    const {data, setData, currentCar, handleBrandChange, handleModelChange, brandSearch, modelSearch, handleSearch, handleTypeChange, handleYearChange, yearSearch, typeSearch, showDropDown, setShowDropDown, brandText, setBrandText, loading, setLoading, handleDropDown, limit, handleShowMore, handleShowLess} = useContext(AppContext) 
    
    useEffect(()=>{
        const accessData = async () => {
            setLoading(true)
            setData([])
            const getResponse = await getData(brandSearch, modelSearch, yearSearch, typeSearch,limit)

            // remove duplicates border
            const seen = new Set();
            const filteredData = getResponse.data.filter((car) => {
              if (!seen.has(car.model)) {
                seen.add(car.model);
                return true; // Keep the item in the filtered array
              }
              return false; // Remove the item from the filtered array
            });
            // remove duplicates border
            
            setLoading(false)
            setData(filteredData)
        }
        accessData()
    },[brandSearch, modelSearch, yearSearch, typeSearch, limit])

  return (
        <section id='car-catalogue' onClick={() => setShowDropDown(false)} className='relative flex flex-col w-full gap-8 py-8 items-left max-md:gap-8 max-lg:pt-14'>

            {/* little description */}
            <section className='flex flex-col w-full gap-2 px-16 items-left max-md:items-center'>
                <h1 className='text-4xl font-semibold'>Car Catalogue</h1>
                <p className='text-lg'>Explore out cars you might like</p>
            </section>

            {/* section for the inputs and dropdown menu */}
            <section className='relative z-0 flex flex-row justify-between px-16 max-lg:flex-col max-lg:px-8 max-lg:gap-4'>
                <div className='relative flex items-center w-7/12 h-12 gap-10 pl-4 border rounded-full bg-slate-50 max-lg:w-full'>
                    <div className='flex items-center w-5/12 gap-2 max-md:w-11/12'>
                        <Image height={30} width={30} className='cursor-pointer' onClick={(e) => handleDropDown(e)} src='https://raw.githubusercontent.com/adrianhajdin/project_next13_car_showcase/69c984204b8be5b600c91f994da9a586fd6b7ad2/public/car-logo.svg'></Image>
                        <input value={brandText} onChange={(event) => handleBrandChange(event)} className='w-full border-none outline-none bg-slate-50' placeholder='Volkswagen...'></input>
                    </div>
                    <div className='flex items-center w-5/12 gap-2 max-md:w-11/12'>
                        <Image height={25} width={25} src='https://github.com/adrianhajdin/project_next13_car_showcase/blob/main/public/model-icon.png?raw=true'></Image>
                        <input onChange={(event) => handleModelChange(event)} className='w-full border-none outline-none bg-slate-50' placeholder='Tiguan...'></input>
                    </div>
                    <div className='absolute bg-white rounded-full cursor-pointer -right-8 max-md:-right-8 max-lg:-right-5' onClick={handleSearch}>
                        <Image height={45} width={45} src='https://raw.githubusercontent.com/adrianhajdin/project_next13_car_showcase/69c984204b8be5b600c91f994da9a586fd6b7ad2/public/magnifying-glass.svg'></Image>
                    </div>
                </div>
                <div className='flex items-center justify-end w-5/12 gap-3 max-lg:w-full max-lg:justify-center'>
                    <select onChange={handleTypeChange} id="countries" className="w-32 h-10 px-2 text-base text-black bg-white border border-gray-300 rounded-lg shadow-md outline-none focus:ring-blue-500 focus:border-blue-500 max-md:text-sm max-md:w-24 max-md:px-1">
                        <option value="fuel" selected>Fuel Type</option>
                        <option value="gas">Gas</option>
                        <option value="electricity">Electricity</option>
                    </select>
                    <select onChange={handleYearChange} id="countries" className="w-32 h-10 px-2 text-base text-black bg-white border border-gray-300 rounded-lg shadow-md outline-none focus:ring-blue-500 focus:border-blue-500 max-md:text-sm max-md:w-24">
                        <option selected>Year</option>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                    </select>
                </div>

                {showDropDown ? (
                    /* if there is no user input, display all the manufacturers */
                brandText.length === 0 ? (
                    <div className='container absolute flex flex-col w-1/4 mt-1 overflow-auto bg-white border shadow-xl top-12 left-16 z-1 h-fit max-h-72 rounded-l-xl max-md:w-1/3 max-md:left-12'>
                        {manufacturers.map(el => (
                            <p className='px-8 py-2 text-base cursor-pointer hover:bg-blue-500 max-md:px-2' onClick={(event) => setBrandText(event.target.innerText)}>{el}</p>
                        ))}
                    </div>
                ) : 
                /* filter manufacturers based on user input */
                (
                    <div className='container absolute flex flex-col w-1/4 mt-1 overflow-auto bg-white border shadow-xl top-12 left-16 z-1 h-fit max-h-72 rounded-l-xl max-md:w-1/3 max-md:left-12'>
                    {manufacturers.filter((el) => el.toLowerCase().includes(brandText.toLowerCase())).map((el) => (
                        <p className='px-8 py-2 text-base cursor-pointer hover:bg-blue-500 max-md:px-2' onClick={(event) => setBrandText(event.target.innerText)}>{el}</p>
                      ))}
                  </div>
                )
                ) : (
                    <></>
                )}
            </section>

            {/* section for the loading animation */}
            {loading && (
                <div role="status" className='flex flex-col items-center justify-center w-screen gap-2 pt-8'>
                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                <span className="">Loading...</span>
            </div>
            )}

            {/* interface if there are no results */}
            {!loading && data && data.length === 0 ? (
                <div className='flex justify-center w-screen pt-8 text-2xl font-bold'>
                    <p>Oops, no results.</p>
                </div>
            ) : (
                <></>
            )}


            {/* section for the cars grid */}
            <section className={`w-screen min-h-fit grid grid-cols-3 gap-6 px-16 relative ${showDropDown && '-z-10'} max-sm:grid-cols-1 max-md:px-2 max-lg:grid-cols-2`}>
                {data && data.map((car, index) => (
                    <Card car={car} key={index}/>
                ))}
            </section>

            {/* section for showMore and showLess buttons*/}
            {data && data.length > 0 ? (
                    <section className='flex justify-center w-full gap-8'>
                        <button onClick={handleShowMore} className='bg-blue-700 text-white px-8 py-3 rounded-full hover:scale-[1.01]'>Show More</button>
                        {data.length >= 14 && (
                        <button onClick={handleShowLess} className='bg-blue-700 text-white px-8 py-3 rounded-full hover:scale-[1.01]'>Show Less</button>
                        )}
                    </section>
            ) : <></>
        }
        
        </section>
        
  )
}

export default CarCatalogue