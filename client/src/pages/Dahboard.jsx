import React from 'react';
import{useEffect,useState,useContext} from 'react';
import{TeamContext} from './../context/teamContext.jsx'
import './../styles/dashboard.css';
import TeamCard from './../components/TeamCard'
const Dashboard = ({ user }) => {
  const[edit, setEdit] = useState(0);
  const[name, setName] = useState('');
  const[tid, setTid] = useState('');
   const{getAllTeams,teams,updateTeamName} = useContext(TeamContext);
   useEffect(() =>{
    getAllTeams(user.userdata.user.username)
   },[teams])
   const handleSubmit = async(e) =>{
    e.preventDefault()
    await updateTeamName(tid,name)
   }
   console.log(teams)
  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.userdata.user.name}!</h2>
      <div className="user-details">
        <p><span className="detail-label"><b>Username:</b> {user.userdata.user.username}</span> </p>
        <p><span className="detail-label"><b>Email:</b> {user.userdata.user.email}</span> </p>
      </div>
      <div className="team-section">
        <h3>Your Teams</h3>
        <ul className="team-list">
        {teams.map((team) => 
            <li  className="team-item">
              <span className="team-name">{team.name} </span><a href = "#" onClick={()=>{setEdit(!edit)}}>Edit Team Name</a>
              {edit?<></>:(
                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Enter new Name" onChange={(e)=>{setName(e.target.value)}}/>
                  <button type = "submit" onClick={()=>{setTid(team._id)}}>Change</button>
                </form>
              )}
              <TeamCard team = {team}/>
              
            
             </li>
       )}

            
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
