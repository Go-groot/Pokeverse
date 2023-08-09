// import { useEffect, useState } from "react";
// import axios from "axios";
// import PokemonCards from "./components/PokemonCards";
// import { url } from "./main";
// import Header from "./components/Header";
// import Loading from "./components/Loading";
// import Footer from "./components/Footer";
// import SearchBar from "./components/SearchBar";
import Home from "./components/Home";
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  // const [pokemons,setPokemons] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [more, setMore] = useState(url);
  
  // async function fetchPokemons(){
  //     const {data} = await axios.get(more);
  //     setMore(data.next);

  //     function PokemonInfo(results){
  //       results.forEach(async pokemon =>{
  //         const {data} = await axios.get(pokemon.url);
  //         setPokemons(prev => [...prev,data]);
  //       }) 
  //       setLoading(false);
  //     }

  //     PokemonInfo(data.results);

  // }
  // useEffect(()=>{
  //   setTimeout(() => {      
  //     fetchPokemons();
  //   }, 3000);
  // },[]);
  
  // const handleLoadMore = () => {
  //   fetchPokemons();
  // }
  
  // if(loading) return <h1><Loading /></h1>; 
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>   
      </Router>
    // <div className="flex flex-col w-[100%] h-[100%] px-[5%]">  
    //   <Header />  
    //   <SearchBar />  
    //   <div className="flex flex-row flex-wrap items-center justify-center ">
    //     {
    //       pokemons.map((pokemon,i) => (
    //         <PokemonCards key={i} name={pokemon.name} experience={pokemon.base_experience} height={pokemon.height} weight={pokemon.weight} stats={pokemon.stats} type={pokemon.types[0].type.name} image={pokemon.sprites.other.dream_world.front_default } url={pokemon.url}/>
    //       ))    
    //     }      
    //   </div> 
    //   <div className=" mb-5 mx-auto">
    //     <a onClick={handleLoadMore} href="#_" className="relative inline-block text-lg group">
    //       <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 rounded-lg group-hover:text-gray-800">
    //       <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#FBA1B7]"></span>
    //       <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#FFD9C0] group-hover:-rotate-180 ease"></span>
    //       <span className="relative">Load More</span>
    //       </span>
    //       <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#FFD9C0] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
    //     </a>        
    //     {/* <button onClick={handleLoadMore} className="flex whitespace-nowrap mx-auto min-w-[4rem] m-5 bg-red-400 p-3">Load More</button> */}
    //   </div>
    //   <Footer />
    // </div>
  )
}

export default App
