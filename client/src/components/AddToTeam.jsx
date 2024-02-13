import React, { useState,useContext } from 'react';
import { TeamContext } from '../context/teamContext';

const AddToTeam = ({ user, pokemon}) => {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [newTeamName, setNewTeamName] = useState('');
  const [types, setTypes] = useState([]);
 
  const {addToTeam, createTeam, teams} = useContext(TeamContext);


  const handleAddToTeam = async() => {
   await addToTeam(selectedTeam,pokemon.pokemon.name,pokemon.pokemon.sprites.other.dream_world.front_default,types)
  console.log(teams);
console.log(selectedTeam);
  };
  const handleNewTeam = async(e) =>{
    e.preventDefault();
   await createTeam(newTeamName,user.userdata.user.username)

  }
  console.log(teams)
  

  return (
    <div className="add-to-team">
      <h3>Add {pokemon.name} to a Team</h3>
      <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
        <option value="">Select a Team</option>
       {teams.length>0?(teams.map((team) => (
          <option value={team._id}>{team.name}</option>
        ))):(<></>)}
      </select>
    <form onSubmit={handleNewTeam}>
          <input
        type="text"
        placeholder="create new tame"
        value={newTeamName}
        onChange={(e) => setNewTeamName(e.target.value)}
      />
      <button type = "submit"><b>+</b></button>
      </form>
      <button onClick={handleAddToTeam}>Add to Team</button>
      
    </div>
  );
};

export default AddToTeam;
