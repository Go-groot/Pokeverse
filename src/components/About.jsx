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
            <div className='flex flex-col gap-6 max-w-[600px] leading-relaxed tracking-[.01rem]'>
              <p className='text-justify'>Lorem ipsum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consequuntur alias fugiat eligendi nihil, eaque perspiciatis expedita fugit nisi esse adipisci amet est magnam odio ullam nulla aliquam ratione animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores consequuntur quisquam sint, maiores qui illo amet quam, sit neque necessitatibus facilis laborum. Impedit consequuntur, totam tempore alias maxime perspiciatis iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deleniti totam laborum, tenetur eum fugit, recusandae facere porro, nesciunt magni numquam! Architecto mollitia quas tempora, officiis qui velit sed saepe? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque aliquid quae aperiam iste illo distinctio autem tempora minima doloribus expedita id natus nemo, quaerat aut at reiciendis non ducimus sit. dolor sit amet consectetur adipisicing elit. Ex voluptatum nemo accusamus odio. Totam dolorum, beatae id quas neque perspiciatis nobis, in deleniti natus, porro adipisci perferendis officia quae incidunt?</p>
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
