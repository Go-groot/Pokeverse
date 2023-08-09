import React from 'react'
import Header from './Header'

const About = () => {
  return (
    <div className="flex flex-col w-[100%] h-[100%] px-[5%] gap-6"> 
      <Header />
      <section className='flex flex-col gap-6 px-[10%] mb-10'>
        <div className='flex flex-row gap-4 items-center my-3 '>
          <h2 className='text-[2rem] font-mono font-extrabold text-[#d6c4a3]'>-&gt; About</h2>
          <div className='w-[50%] h-[1.5px] bg-gray-300'></div>
        </div>
        <div className='flex flex-col md:flex-row gap-8'>
            <div className='flex flex-col gap-6 font-mono max-w-[600px] leading-relaxed tracking-[.01rem]'>
              <p className='text-justify'>Welcome to an immersive Pokemon card experience. Our website, built with React.js, leverages the dynamic capabilities of Tailwind CSS, Chart.js, and Axios to bring you a comprehensive repository of Pokemon cards and their related information.</p>

              <p>Using React.js, I've crafted a responsive and interactive platform that ensures a seamless user experience across devices. Whether you're on a desktop, tablet, or smartphone, you'll enjoy a smooth and engaging exploration of the world of Pokemon cards.</p>

              <p>This aesthetically pleasing user interface is a testament to the power of Tailwind CSS. With its intuitive styling and components, we've achieved a visually appealing design that showcases each Pokemon card's uniqueness. Every card is displayed with utmost clarity, making it easy for enthusiasts to analyze and appreciate the intricate details.</p>

              <p>Chart.js enhances your journey by transforming card statistics into dynamic visual representations. Effortlessly grasp trends, attributes, and characteristics through interactive charts, making data interpretation an enjoyable experience.</p>

              <p>Thanks to Axios, website fetches real-time data from authoritative sources, ensuring that you're always up-to-date with the latest information about your favorite Pokemon cards. Whether you're curious about rarity, attack power, or evolution paths, our website provides accurate and current details.</p>
            </div>
            <div className='relative aspect-square my-auto rounded-lg'>
              <img className='rounded-lg mix-blend-multiply' src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=456&q=80" alt="Avatar" />
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
