import React, { useState,useContext} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import { AuthContext } from './../context/userAuth'

   
const SignUp = () => { 
    const navigate = useNavigate();
    const { regisUser, user } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       console.log(user);
    const handleSubmit = async (e) => {
        e.preventDefault();
         await regisUser(username,password,name,email)
        
};
    if(user && !user.error){
            navigate('/')
        }
      

    return (
        <div className="login-form-container">
            <h2>Regiter</h2>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    /> </div>
                    <div className="form-group">
                    <label htmlFor="username">UserName:</label>

                    <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
              /> </div>
              <div className="form-group">
                    <label htmlFor="email">Email:</label>

                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
            />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <Link to = "/login">Already Registered? Login Here</Link>
            {user?(
                user.error?<p className='pokemon-name'>{user.message}</p>:<></>
            ):(
                <></>
            )
            }
        </div>
    );
};

export default SignUp;
