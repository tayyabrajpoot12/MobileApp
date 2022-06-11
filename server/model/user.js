let mongoose  = require('mongoose');

let userSchema = mongoose.Schema({
    Name:String,
    Password:String,
    Email:String,
    Address:String,
    Contect:String,
});

let users  = mongoose.model('users' , userSchema);

module.exports = users;