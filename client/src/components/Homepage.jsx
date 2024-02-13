import './../styles/home.css'
import search from './../assets/search.svg'
import Pokemoncard from './Pokemoncard'
import { useState, useEffect} from 'react'

const Hompage = () =>{
	const [pname, setPname] = useState("");
	const [poke, setPoke] = useState([]);
	const [pokeLis, setPokeLis] = useState([]);
	useEffect(() => {
    const getPoke = async() => {
		 

    const api = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`);
    const data = await api.json();
    const promises = await data.results.map(async pokemon => {
      const result = await fetch(pokemon.url);
      const res = await result.json();
      return res;
    });

    const results = await Promise.all(promises);
	setPoke(results);
	setPokeLis(results);
   
  }
	getPoke()
	
	}, [])
	const searchPoke = async (Pname) => {
	setPoke([])
	const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pname}`);
		
	const res = await data.json();
	Pname === ""? setPoke(pokeLis):setPoke(res);
		
		
		}

	
	
	return(
	<>
		<div className = "home-main">
			<div className = "search-bar">
				
					<input type = "text" name = "search-text" className = "search-text" placeholder = "Search For Pokemon" onChange = {(e)=>setPname(e.target.value)} />
					<button  className = "search-btn"><img src = {search} height = {50} width = {50}  onClick = {() => {searchPoke(pname)}} /></button>
			
			</div>
			<div className = "card-container">
			{
			poke.length>1?
			(poke.map(pokem => <Pokemoncard pokemon = {pokem} />))
				:
				(<Pokemoncard pokemon = {poke} />)
				}
			</div>
		</div>
	
	</>
	
	)
	
	
};
export default Hompage