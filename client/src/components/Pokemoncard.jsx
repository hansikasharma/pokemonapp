import './../styles/card.css'
import { useEffect, useState,useContext} from 'react'
import { AuthContext } from './../context/userAuth'
import { TeamContext } from './../context/teamContext'
import {Link} from 'react-router-dom'
import AddToTeam from './AddToTeam'
const Pokemoncard = (pokemon) => {
	  const [imageIndex, setImageIndex] = useState(0);
      const[add,setAdd] = useState(0);
    const {user} = useContext(AuthContext)
    const{teams} = useContext(TeamContext)
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
	
	const value = " ";
	return (
		<>
		{pokemon.pokemon.name?
		(<div className="pokemon-card">
        <Link to ={"/pokemon/"+pokemon.pokemon.id} state = {{pokemon:pokemon}}> 
            
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
            </Link>
          { user?(
            !user.error? <button onClick={()=>{setAdd(!add)}}> Add to Team</button>:<></>):(<></>)
          }
          
        {add?(<AddToTeam pokemon={pokemon} user={user} />):<></>}

		</div>):
		(<h1>Not found</h1>)}
		</>
		)
}
export default Pokemoncard