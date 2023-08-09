import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex flex-row rounded-xl bg-gradient-to-r from-[#A1CCD1] to-[#E9B384] shadow-md items-center justify-between py-[2%] px-[10%] mt-5' >
        <div className=''>
            <Link to="/">
                <img className='w-[8rem] md:w-[20rem] hover:scale-110 transition duration-300 ease-linear' src="https://cdn.custom-cursor.com/packs/63/pack2282.png" alt="logo" />            
            </Link>
        </div>
        <div className=''>
            <Link to="/about"><h3 className='text-4xl font-pokemon rounded-md focus-within:shadow-lg text-red-500 bg-white px-2 py-1'>About</h3></Link>
        </div>
    </header>
  )
}

export default Header
