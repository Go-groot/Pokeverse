import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#CCEEBC] rounded-lg py-2 px-4 shadow mx-4 my-6">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-md text-gray-500 sm:text-center">© 2023 Pokéverse™ All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
            <li>
                <Link to="/about" className="mr-4 hover:underline text-lg md:mr-6 ">About</Link>
            </li>
        </ul>
        </div>
    </footer>
  )
}

export default Footer
