import User from "../models/user.model.js";

export const searchUser= async (req,res)=>{
    try{
        const {name}=req.body;
        console.log(name);
        const query={fullName:name};
        console.log(query);
        const allUser=await User.find(query);
        console.log(allUser)
        res.json(allUser);
    }catch(error){
        res.status(500).send({ message: error.message });
    }
}