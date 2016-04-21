var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
    local            : {            
        email        : String,
        password     : String,
        username     : String,
        phone        : String,
        role         : String,
        loggedIn     : Boolean,
        image        : String,
        completed    : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Fail'}],
        category     : { type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    }
});


userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null); 
};


userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


module.exports = mongoose.model('User', userSchema);