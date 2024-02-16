import {createContext, useState, useEffect, useContext} from 'react'
import {AuthContext} from './userAuth'
export const TeamContext = createContext({});
export const TeamProvider = ({ children }) => {

  
   const[teams,setTeams] = useState([]);
   
   const getAllTeams = async(username) =>{
   
        const response = await fetch(`https://pokemonapp-n3vx-api.vercel.app/api/v1/team/${username}`)
        const data = await response.json();
        setTeams(data.data.team);
        
     

   }

   const deleteMember = async(memid,teamid) =>{
    const response = await fetch(`https://pokemonapp-n3vx-api.vercel.app/api/v1/team/delete-member/${teamid}/${memid}`)
        const data = await response.json()
        setTeams([...teams,data.data.team]);

   }
   const deleteTeam = async(teamid) =>{
    const response = await fetch(`https://pokemonapp-n3vx-api.vercel.app/api/v1/team/delete-team/${teamid}`)
    const data = await response.json()
    await getAllTeams();

   }
   const addToTeam = async(teamid,mname,msprite,mtype) =>{
    const response = await fetch(`https://pokemonapp-n3vx-api.vercel.app/api/v1/team/addtoteam/${teamid}`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
            membername:mname,
            membersprite:msprite,
            membertype:mtype
            })
         } );
        
    const data = await response.json();
   
    
    setTeams([...teams,data.data.team]);
   }
   const updateTeamName = async(teamid,tname) =>{
    const response = await fetch(`https://pokemonapp-n3vx-api.vercel.app/api/v1/team/update-team/${teamid}`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
           teamName:tname
            })
         } );
        
    const data = await response.json();
    
    setTeams([...teams,data.data.team]);

   }

   const createTeam = async(tname,uname) =>{
    const response = await fetch(`https://pokemonapp-n3vx-api.vercel.app/api/v1/team/newteam`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
           name:tname,
           username:uname
            })
         } );
        
    const data = await response.json();
    
    setTeams([...teams,data.data.team]);

   }


   
   
   
   
   
    return (
        <TeamContext.Provider
            value = {{
                teams,
                getAllTeams,
                deleteMember,
                deleteTeam,
                createTeam,
                updateTeamName,
                addToTeam
                }}
                >
                {children}
            </TeamContext.Provider>
        )
}
// 