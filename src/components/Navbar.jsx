import './../styles/nav.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
	return(
		<>
		<nav className  = "nav-bar">
			<ul className = "brand">
					<li><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dhSUjdAL904JG_c93NDLnT36lLAwn7OjQA&usqp=CAU" className  = "logo" /></li>
					<li>PokeMon</li>
			</ul>
			<ul className = "nav-links">
				<li><a href = "#">About Us</a></li>
				<li><a href = "#">Dashboard</a></li>
				<li><a href = "#">Pokemon</a></li>
			</ul>
		</nav>
		</>
		)
	
}
export default Navbar;