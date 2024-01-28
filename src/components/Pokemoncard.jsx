import './../styles/card.css'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const Pokemoncard = (pokemon) => {
	  const [imageIndex, setImageIndex] = useState(0);

    // Placeholder image URLs for the carousel
    const carouselImages = [
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.pokemon.id}.svg`,
		`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemon.pokemon.id}.png`,
		`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.pokemon.id}.png`,
		`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/${pokemon.pokemon.id}.gif`
		
       
    ];
	

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);
	console.log(pokemon)
	const value = " ";
	return (
		<>
		{pokemon.pokemon.name?
		
		(   <Link to ={"/pokemon/"+pokemon.pokemon.id} state = {{pokemon:pokemon}}> <div className="pokemon-card">
            
            <div className="pokemon-details">
                <div className="image-carousel">
                    {carouselImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Pikachu Image ${index + 1}`}
                            style={{ display: index === imageIndex ? 'block' : 'none' }}
                            className="carousel-image"
                        />
                    ))}
                </div>
                <div className="info">
                    <h2 className="pokemon-name">{pokemon.pokemon.name}</h2>
                    <p className="description"></p>
                    <div className="attributes">
                        <p><span>Type: </span>{pokemon.pokemon.types.map((type) => (
					<> {type.type.name},</>
                    ))}</p>
                        <p><span>Height:</span> {pokemon.pokemon.height} m</p>
                        <p><span>Weight:</span> {pokemon.pokemon.height} kg</p>
                    </div>
                </div>
            </div>
		</div></Link>):
		(<h1>Not found</h1>)}
		</>
		)
}
export default Pokemoncard