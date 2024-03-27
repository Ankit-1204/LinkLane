import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
  fullName:{
    type:String,
    required:true
  },
  userName:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    minlength:6
  },
  gender:{
    type:String,
    enum:["male","female"]
  },
  profilePic:{
    type:String,
    default:""
  },
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}]
},{timestamps:true});
const User=mongoose.model("User",userSchema);
export default User;