const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
		type: String,
		required: true,
		unique: false,
		trim: true
		},
    username: {
            type: String,
            required: true,
            unique: true,
            trim: true
            },
    password: {
                type: String,
                required: true,
                },
    email: {
        type: String,
        trim: true
            },

});
userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);

}
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}
const User = mongoose.model('User', userSchema);
module.exports = User;