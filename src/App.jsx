import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import PokemonDetails from './pages/PokemonDetails'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';


function App() {
  

  return (
    <>
	<Navbar />
	 <BrowserRouter>
      
	  <Routes>
	  <Route path = "/" element = {<Homepage />} />
	  <Route path = "/pokemon/:id" element = {<PokemonDetails />} />
	  
	  </Routes>
      
    </BrowserRouter>
	</>
  )
}

export default App
