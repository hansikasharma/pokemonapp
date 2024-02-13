
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Protected from './components/Protected'
import PokemonDetails from './pages/PokemonDetails'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { useContext } from 'react'
import { AuthContext } from './context/userAuth'

import { BrowserRouter,Route,Routes,Link,MemoryRouter } from 'react-router-dom';
import Dashboard from './pages/Dahboard'
import AboutUs from './pages/AboutUs'


function App() {
  const{user} = useContext(AuthContext);

  return (
    <>
	
	 <MemoryRouter>
      <Navbar />
	  <Routes>
	  <Route path = "/" element = {<Homepage />} />
	  <Route path = "/pokemon/:id" element = {<PokemonDetails />} />
	  <Route path = "/login" element = {<Login />} />
	  <Route path = "/register" element = {<SignUp />} /> 
	  <Route
            path="/dashboard"
            element={
              <Protected user={user}>
                <Dashboard user = {user}/>
              </Protected>
            }
          />
    <Route path = "/aboutus" element = {<AboutUs />} />
	  </Routes>
      
    </MemoryRouter>
	</>
  )
}

export default App
