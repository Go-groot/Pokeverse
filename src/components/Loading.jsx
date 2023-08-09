import React from 'react'
import '../styles.css'
const Loading = () => {
  return (
    <section className='flex items-center justify-center py-[5%] px-[10%] w-full h-screen overflow-hidden'>
        <div className='w-full h-full object-contain flex items-center justify-center transition-opacity duration-75'>
            <img className='screenCross h-full' src="https://clipart-library.com/image_gallery/n1582649.gif" alt="Loading....." />
        </div>
    </section>
  )
}

export default Loading
