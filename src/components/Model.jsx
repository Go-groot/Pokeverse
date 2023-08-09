import React from 'react'
import '../styles.css'
import Chart from './Chart'

const Model = ({image,type,name,close,style,stats,experience,height,weight}) => {
  return (
    <> 
      <main className={`model fixed z-50 overflow-scroll shadow-xl bg-white flex flex-col left-0 md:left-[25rem] py-[2%] px-[4%] w-full md:w-[50%] h-[100vh]`}>
        <div onClick={close} className={`flex w-full items-center justify-end `}>
            <img className='w-5 h-5 hover:scale-150 hover:shadow-xl hover:rounded-xl transition duration-500' src="https://icon-library.com/images/x-icon/x-icon-6.jpg" alt="" />
        </div>
        <div className='flex w-[10rem] mx-auto items-center shadow-lg justify-center m-5 text-3xl'>
          <h1 className={`capitalize ${style} px-5 rounded-br rounded-tl font-bold font-mono`}>{name}</h1>
        </div>
        <div className={`flex items-center transform transition duration-500 hover:scale-110 w-[15rem] ${style} p-3 mb-4 mx-auto rounded-md shadow-xl border-gray-500 justify-center`}>
          <img className='' src={image} alt={name} />
        </div>
        <div className='flex h-auto flex-col md:flex-row gap-7 w-full items-center mt-5 md:justify-between'>
          <div className='flex flex-col transform transition duration-500 hover:scale-110 px-3 py-4 rounded-md shadow-lg items-start w-full'>
            {
              stats.map((stat,i)=>(
                <div key={i} className='flex w-full items-center justify-between'>
                  <label className='capitalize whitespace-nowrap text-[13px] font-bold'>{stat.stat.name}</label>
                  <div className='flex items-center justify-between w-[9rem]'>
                    <progress className='h-[7px] pBar w-[7rem]' value={stat.base_stat} max={100}/>
                    {stat.base_stat}
                  </div>
                </div>
              ))
            }
          </div>
          <div className='flex flex-col transform transition duration-500 hover:scale-110 rounded-md px-3 py-4 shadow-lg justify-start w-full h-full'>
            <div className='flex w-full justify-between'>
              <label className='capitalize whitespace-nowrap text-[13px] font-bold'>Experience</label>
              <div className='flex items-center justify-between w-[9rem]'>
                <progress className='pBar h-[7px] w-[7rem]' value={experience} max={500}/>
                {experience}
              </div>
            </div>
            <div className='flex w-full items-start justify-between'>
              <label className='capitalize whitespace-nowrap text-[13px] font-bold'>Height</label>
              <div className='flex items-center justify-between w-[9rem]'>
                <progress className='pBar h-[7px] w-[7rem]' value={height} max={100}/>
                {height}
              </div>
            </div>
            <div className='flex w-full items-start justify-between'>
              <label className='capitalize whitespace-nowrap text-[13px] font-bold'>Weight</label>
              <div className='flex items-center justify-between w-[9rem]'>
                <progress className='pBar h-[7px] w-[7rem]' value={weight} max={100}/>
                {weight}
              </div>
            </div>
          </div>
        </div>
        <Chart stats={stats} experience={experience} height={height} weight={weight}/>
      </main>
      {/* <div className='absolute z-40 w-full h-screen bg-black/10'></div>    */}
      {/* <div className='fixed z-5 bg-gray-500 flex flex-col left-0 w-full h-[100vh]'></div> */}
    </>
  )
}

export default Model
