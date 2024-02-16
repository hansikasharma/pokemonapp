import {createContext, useState, useEffect} from 'react'
export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem('user')) : null);
	useEffect(() => {
	
	localStorage.setItem("user", JSON.stringify(user))
}, [user])


	
const getUser = async (email,pwd) => {
    const response = await fetch(`http://localhost:3000/api/v1/user/login`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
        username: email, 
        password: pwd
        
            })
        })
    const data = await response.json();
 
    setUser(data);   console.log(user)
    
	}
	

    const regisUser = async (username,pwd,name,email) => {
        const response = await fetch('http://localhost:3000/api/v1/user/register',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
            username: username, 
            name: name,
            email: email, 
            password: pwd
           
                })
             } );
            
        const data = await response.json();
		
        setUser(data);
        
    };
   
	

return (
	<AuthContext.Provider
		value = {{
			user,
			getUser,
			regisUser,
			setUser,
            
			}}
			>
			{children}
		</AuthContext.Provider>
	)
}
	