import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from "./routes/message.routes.js";
import searchRouter from "./routes/search.routes.js"
import connectToMongoDB from '../db/connectToMongoDB.js';
import cors from 'cors';

const app=express();
const corsOptions = {
    origin: 'http://localhost:5173', // Allow requests from this origin
    credentials: true, // Allow credentials (e.g., cookies, authorization headers)
  };
 
  app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);

app.use("/api/messages",messageRoutes);

app.use("/api/search",searchRouter)
// app.get("/",(req,res)=>{
//     res.send("Hello World!!");
// });

app.listen(5000,()=>{
    connectToMongoDB();
    console.log('Server is running on port 5000');
});