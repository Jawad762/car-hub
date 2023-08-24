"use client"
import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const Context = ({children}) => {

  const [showModal, setShowModal] = useState(false)
  const [currentCar, setCurrentCar] = useState({})
  const [data, setData] = useState()
  const [brandText, setBrandText] = useState('')
  const [modelText, setModelText] = useState('')
  const [brandSearch, setBrandSearch] = useState('')
  const [modelSearch, setModelSearch] = useState('')
  const [yearText, setYearText] = useState('')
  const [typeText, setTypeText] = useState('')
  const [yearSearch, setYearSearch] = useState('')
  const [typeSearch, setTypeSearch] = useState('')
  const [showDropDown, setShowDropDown] = useState(false)
  const [loading, setLoading] = useState()
  const [limit, setLimit] = useState(15)
  const [showSignin, setShowSignin] = useState(true)

  const handleClick = (car) => {
    setCurrentCar(car)
    setShowModal(true)
  }

  const handleBrandChange = (event) => {
    setBrandText(event.target.value)
    setShowDropDown(true)
  }

  const handleModelChange = (event) => {
    setModelText(event.target.value)
  }

  const handleYearChange = (event) => {
    setYearText(event.target.value)
  }

  const handleTypeChange = (event) => {
    setTypeText(event.target.value)
  }

  const handleSearch = () => {
    setBrandSearch(brandText)
    setModelSearch(modelText)
    setYearSearch(yearText)
    setTypeSearch(typeText)
  }

  const handleExploreCars = () => {
    document.getElementById('car-catalogue').scrollIntoView({behavior : 'smooth'})
  }

  const handleDropDown = (e) => {
    setShowDropDown(prev => !prev)
    e.stopPropagation()
  }

  const handleShowMore = () => {
    setLimit(limit => limit + 15)
    document.getElementById('car-catalogue').scrollIntoView({behavior : 'smooth'})
  }

  const handleShowLess = () => {
    setLimit(limit => limit - 8)
    document.getElementById('car-catalogue').scrollIntoView({behavior : 'smooth'})
  }

  return (
    <AppContext.Provider value={{setShowModal, showModal, setCurrentCar, handleClick, currentCar, setData, data, handleSearch,handleBrandChange, handleModelChange, brandSearch, modelSearch, handleTypeChange, handleYearChange, yearSearch, typeSearch, handleExploreCars, showDropDown, setShowDropDown, brandText, setBrandText, loading, setLoading, handleDropDown, limit, handleShowMore, handleShowLess, showSignin, setShowSignin}}>
        {children}
    </AppContext.Provider>
  )
}

export default Context