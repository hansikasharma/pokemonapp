import { useParams, useLocation, Link } from 'react-router-dom';
import './../styles/poke-detail.css'
const PokemonDetails = () =>{
	const params = useParams();
	const getPokemon = params;
	const location = useLocation();
	const pokemons = location.state?.pokemon.pokemon;
	console.log(location);
	 return (
        <div className="pokemon-detail">
            <div className="header">
                <img src={pokemons.sprites.other.dream_world.front_default} alt={`Image of ${pokemons.name}`} />
                <div className="name">
                    <h2>{pokemons.name}</h2>
                    <p>{pokemons.types.map((type) => (
					<> {type.type.name},</>
                    ))}</p>
                </div>
            </div>
            <div className="description">
               
            </div>
            <div className="attributes">
                <p><strong>Type:</strong> {pokemons.types.map((type) => (
				<> {type.type.name},</>
                    ))}</p>
                <p><strong>Height:</strong> {pokemons.height}</p>
                <p><strong>Weight:</strong> {pokemons.weight}</p>
            </div>
			
            <div className="abilities">
                <p><strong>Abilities:</strong>{pokemons.abilities.map((ability) => (
                        <> {ability.ability.name},</>
                    ))}</p>
            </div>
			<div className = "abilities">
			<p><strong>Held-items:</strong>{pokemons.held_items.map((item) => (
                        <li>{item.item.name}</li>
                    ))}</p>
			</div>
            <div className="moves">
                <h3>Moves</h3>
                <ul>
                    {pokemons.moves.slice(0,7).map((move, index) => (
                        <li key={index}>{move.move.name}</li>
                    ))}
                </ul>
            </div>
            <Link to ="/"><h3>Back</h3></Link>
        </div>
    )
	
}
export default PokemonDetails