import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import connectDB  from "./lib/db.js";
import cookieParser from "cookie-parser"
// .js is used because we use type module in js for local file

const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
// extract json data from body
app.use(cookieParser());
// help to get cookie

app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log("server is running in port : " + PORT);
    connectDB();
});