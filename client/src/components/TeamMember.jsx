import{useContext} from 'react'
import{AuthContext} from './../context/userAuth'
import{TeamContext} from './../context/teamContext'
const TeamMember = ({member,team}) =>{
    console.log(member)
    const{deleteMember} = useContext(TeamContext)
    const{user} = useContext(AuthContext)
    const handleClick = async() =>{
        await deleteMember(member._id,team._id)
    }
    return(<>
  
  <div className="member">
    <span className="mem-img">
       <img src={member.membersprite} alt="poke-img" /> 
    </span>
    <span className="mem-name">{member.membername}</span>
    <button className="del-mem" onClick={handleClick}>delete</button>
  </div>
    
    </>)
}
export default TeamMember