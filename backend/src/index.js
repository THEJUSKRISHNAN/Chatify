import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import connectDB  from "./lib/db.js";
import cookieParser from "cookie-parser"
import cors from "cors"
import { app,server } from "./lib/socket.js";
// .js is used because we use type module in js for local file



dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
// extract json data from body
app.use(cookieParser());
// help to get cookie
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

server.listen(PORT,()=>{
    console.log("server is running in port : " + PORT);
    connectDB();
});

