"use client"
import React from 'react'
import { useState } from 'react'
import { FaLocationCrosshairs } from "react-icons/fa6";

export default function SearchBar() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  let debounceTimer;

  const fetchResults = async (query) => {
    try {
      const response = await fetch(`/api/autocomplete?q=${query}`)
      const data = await response.json()
      if (data.status === 200) {
        setResults(data.results)
      } else {
        setResults([])
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    const inputValue = e.target.value
    setSearch(inputValue)

    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(async () => {
      if (inputValue.trim() !== '') {
        fetchResults(inputValue)
      } else {
        setResults([])
      }}
    )
  }

  const redirectUser = (latitude, longitude) => {
    window.location.href = `/location/${latitude}/${longitude}`
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude.toFixed(5);
        const longitude = position.coords.longitude.toFixed(5);
        redirectUser(latitude, longitude)
      }, (error) => {
        console.error(error);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  return (
    <div className='flex justify-center text-center'>
        <div className='flex flex-col gap-1 mb-2'>
            <p className='text-3xl font-bold text-[#131A2B] dark:text-[#FAFAFA]'>Welcome to <span className='text-[#8FB2F5]'>iWeather</span></p>
            <p className='text-slate-500'>Choose a location to see the weather forecast</p>
            <div className='flex items-center'>
              <input
                type='text'
                className='bg-[#FAFAFA] dark:bg-[#131A2B] p-4 rounded-lg mt-5 mb-5 w-full sm:w-96 text-[#1E1E29] dark:text-[#FAFAFA] h-10'
                value={search}
                onChange={handleChange}
                placeholder='Enter a city'
              />
              <button
                className='bg-[#FAFAFA] text-[#1E1E29] hover:bg-slate-400 dark:bg-[#131A2B] dark:hover:bg-slate-700 p-2 rounded-lg dark:text-[#FAFAFA] ml-2 flex items-center justify-center h-10 w-10'
                onClick={handleLocationClick}
              >
                <FaLocationCrosshairs className='h-5 w-5'/>
              </button>
            </div >
            {results && results.length > 0 && results.map((item,index) => (
              <div key={index} className='bg-[#FAFAFA] dark:bg-[#1E1E29] p-2 rounded-lg hover:bg-slate-400 dark:hover:bg-slate-700'>
                <p className='text-[#3b3b56] dark:text-[#FAFAFA] cursor-pointer ' onClick={() => redirectUser(item.lat, item.lon)}>{item.name}, {item.country}</p>
              </div>
            ))}
        </div>
    </div>
  )
}