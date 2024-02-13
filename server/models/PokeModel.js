const mongoose = require('mongoose');
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
const Poke = mongoose.model('Poke',PokeSchema);
module.exports = Poke;