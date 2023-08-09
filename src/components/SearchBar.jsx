import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-full my-3 mx-auto'>
        <div className="relative flex items-center w-full h-14 rounded-lg focus-within:shadow-lg bg-[#E1ECC8] overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-red-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLineCap="round" strokeLineJoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <input
            className="h-full w-full outline-none text-md bg-[#E1ECC8] text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Call out your partner..." /> 
        </div>
    </div>
  )
}

export default SearchBar
