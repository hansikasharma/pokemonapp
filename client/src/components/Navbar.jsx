import './../styles/nav.css';
import {Link} from 'react-router-dom';
import { useState,useContext } from 'react';
import{AuthContext} from './../context/userAuth'

const Navbar = () => {
	const {user, setUser} = useContext(AuthContext);
	
	
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
			{
				user? (
					!user.error?
					<a href = "#" onClick={()=>{setUser(null)}}>Logout</a>
					:<Link to = "/login">Login</Link>
				): (<Link to = "/login">Login</Link>)
			}			
			{
				user? (
					!user.error?
					<a href = "#">Hi</a>
					:<Link to = "/register">Register</Link>
				): (<Link to = "/register">Register</Link>)
			}			


				
			</ul>
		</nav>
		
		</>
		)
	
}
export default Navbar;