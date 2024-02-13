import './../styles/nav.css';
import {Link} from 'react-router-dom';
import { useState,useContext } from 'react';
import{AuthContext} from './../context/userAuth'

const Navbar = () => {
	const {user, setUser} = useContext(AuthContext);
	console.log(user)
	const s = "";
	return(
		<>
		<nav className  = "nav-bar">
			<Link to = '/'><ul className = "brand">
					<li><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dhSUjdAL904JG_c93NDLnT36lLAwn7OjQA&usqp=CAU" className  = "logo" /></li>
					<li>PokeMon</li>
			</ul></Link>
			<ul className = "nav-links">
			<Link to ="/aboutus"><li><a href = "#">About Us</a></li></Link>
				<Link to = '/dashboard'><li><a href = "#">Dashboard</a></li></Link>
				{user?(<li><a href = "#">Hi!</a></li>):(<Link to = "/login"><li><a href = "#">login</a></li></Link>)}
				{user?(<li onClick={()=>{setUser(null)}}><a href = "#">Logout</a></li>):(<Link to = "/register"><li><a href = "#">Register</a></li></Link>)}

				
			</ul>
		</nav>
		
		</>
		)
	
}
export default Navbar;