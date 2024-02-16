import {useState, useContext} from 'react'
import{Link, useNavigate} from 'react-router-dom'
import { AuthContext } from './../context/userAuth'
function Login() {
    const navigate = useNavigate();
    const { getUser, user,setUser } = useContext(AuthContext);
    const [username, setUsername] = useState("");
   
	
    console.log(user)
    
	
   
    const [password, setPassword] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
     await  getUser(username,password)
       if(user && !user.error){
            navigate('/')
        }
    }
        
       
    
   

    return (
        <div className="login-form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">UserName:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </div>
                <button type="submit">Login</button>
            </form>
            {user?(
                user.error?<p className='pokemon-name'>{user.message}</p>:<></>
            ):(
                <></>
            )
            }
            <Link to = "/register">New? Register Here</Link>
        </div>
    );
}

export default Login;
