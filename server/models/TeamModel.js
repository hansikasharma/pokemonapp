const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const PokeSchema = new mongoose.Schema({

    
        membername:{
            type: String
        },
        membersprite: {
            type: String,
            required:true,
            default: "https://via.placeholder.com/200"
        },
        membertype: [String]
    
})


const teamSchema = new mongoose.Schema({
    name: {
		type: String,
		required: [true,'name can not be empty'],
		unique: false,
		trim: true
		},
    username: {
            type:String,
            required: true
            },
    members: {
        type:[PokeSchema],
        deafault: undefined
    }
   
});

const Team = mongoose.model('Team',teamSchema);
module.exports = Team;