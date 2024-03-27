const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/UserProf',{useNewUrlParser: true});

const userSchema= new mongoose.Schema({
    name: String,
    Hobby: String,
    Age: Number
});

const Users = mongoose.model("User",userSchema);

const user=new Users({
    name: "Admoo",
    Hobby: "Nothing",
    Age: 100
});

user.save();