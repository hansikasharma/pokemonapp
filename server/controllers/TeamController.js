const Team = require('./../models/TeamModel');
exports.createTeam = async(req,res) => {
    try{
		const newTeam = await Team.create(req.body);
		
		res.status(201).json({
			status: 'success',
			data: {
				team: newTeam
			}
		});
		}catch(err){
		res.status(400).json({
			status: 'fail',
			message: 'invalid data'
		})
	}
}
exports.addToTeam  = async(req,res) => {
    try {
        
        const updatedTeam = await Team.findByIdAndUpdate(
          req.params.id,
          { $push: { members: req.body } },
          { new: true } 
        );
    
        if (!updatedTeam) {
          throw new Error('Team not found');
         
        }
        res.status(200).json({
            status: 'success',
            data: {
                team: updatedTeam
            }
        });
       
       
      }
      
        catch(err){
            res.status(201).json({
                status: 'fail',
                message:'failed to Update'
            });
            return;
        }
      
}
exports.getAllTeams = async(req,res) =>{
   try{ 
  const teams = await Team.find({ username: req.params.username}).exec();
  if(!teams){
 
        throw new Error('Team not found');
       
      
  }
  res.status(200).json({
    status: 'success',
    data: {
        team: teams
    }
});

}catch(err){
    res.status(201).json({
        status: 'fail',
        message:'failed to find teams for this user'
    });
    return;
}

}
exports.deleteMember = async(req,res) =>{
    try {
        const updatedTeam = await Team.findByIdAndUpdate(
          req.params.id,
          { $pull: { members: { _id: req.params.memid } } },
          { new: true } 
        );
    
        if (!updatedTeam) {
          throw new Error('Team not found');
        }
        
        res.status(200).json({
            status: 'success',
            data: {
                team: updatedTeam
            }
        });
        
        }catch(err){
            res.status(201).json({
                status: 'fail',
               message:'failed deleting member'
            });
            return;
        }
           

}
exports.updateTeam = async(req,res) =>{
    try{
       
            const updatedTeam = await Team.findByIdAndUpdate(
              req.params.id,
              { name: req.body.teamName },
              { new: true }
            );
        
            if (!updatedTeam) {
              throw new Error('Team not found');
            }
              
        res.status(200).json({
            status: 'success',
            data: {
                team: updatedTeam
            }
        });
        
        
        }catch(err){
            res.status(201).json({
                status: 'fail',
               message:'failed to change name'
            });
            return;
        }
           

}
exports.deleteTeam = async(req,res) =>{
    try{
        const updatedTeam = await Team.findByIdAndDelete(req.params.id);
         if (!updatedTeam) {
              throw new Error('Team not found');
            }
            res.status(204).json({
                    status: 'success',
                    data: {
                        message: "Deleted"
                    }
                })	
                } catch(err){
                res.status(400).json({
                    status: 'fail',
                    message: 'Failed to delte team'
                })
                console.log(err)
            }
}
exports.sayHi = async (req,res) => {
    res.status(200).json({
        status: 'success',
        data:{
            message: 'Hello to the bakend of pokemon app, this place makes it work'
        }
    });
};
