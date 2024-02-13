import {Link} from 'react-router-dom'
import{AuthContext} from './../context/userAuth'
import {TeamContext} from './../context/teamContext'
import{useContext} from 'react'
import TeamMember from './TeamMember'
const TeamCard = ({team}) =>{
    const{user} = useContext(AuthContext)
    const{deleteTeam} = useContext(TeamContext)
    const handleClick = async() =>{
        await deleteTeam(team._id)
    }
  
  
    return(
        <>
        <div className="mem-cont">
       {team?(team.members.map((member) => 
   			<TeamMember member={member} team = {team} />
       ))
       :
       (<h1 className="pokemon-name">No teams to show</h1>)
       }
        <button className = "del-mem" onClick={handleClick}>deleteTeam</button>
        </div>
        </>
    )
}
export default TeamCard