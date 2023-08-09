import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer'; 
import '../styles.css';
import Model from './Model';

const PokemonCards = ({name,image,type,stats,experience,height,weight}) => {

    const [isOpen,setIsOpen] = useState(false);
    const {ref:myRef,inView} = useInView({triggerOnce:true})

    const handleClick = () =>{
        setIsOpen(!isOpen);
    }
    
    const styleBackground = `pokemonCard_type_${type}`;
    const textColor = `pokemonCard_type_${type}_title`;


    return (       
        <>
        {isOpen && <Model name={name} experience={experience} height={height} weight={weight} stats={stats} image={image} type={type} style={styleBackground} close={handleClick}/>}        
        <div ref={myRef} className={`flex ${inView ? 'cardAnimate' : ''} flex-col hover:scale-110 transition duration-500 ease-in-out w-[18rem] rounded-xl bg-gradient-to-b from-[#82AAE3]/20 to-[#EAFDFC] m-10 shadow-md shadow-slate-400`}>
            <div onClick={handleClick} className={`relative mx-4 mt-4 p-2 h-50 rounded-xl ${styleBackground} shadow-lg`}>
                <img className='w-full h-full object-contain' src={image} alt="profile-picture" />
            </div>
            <div className={`flex flex-col p-6 text-center`}>
                <h4 className="mb-2 capitalize block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-900 antialiased">
                {name}
                </h4>
                <h5 className={`capitalize text-yellow-300 p-2 font-semibold underline underline-offset-8 tracking-wider`}>Type: <span className={`${textColor}`}>{type}</span></h5>
            </div>
        </div>     
        </>
    )
}

export default PokemonCards
