import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({ path: 'env' }); 

const connectToMongoDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connect to MongoDB")
    } catch(error){
        console.log("Error connecting to MongoDB", error.message)
    }
}
export default connectToMongoDB;