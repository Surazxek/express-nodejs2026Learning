import express from 'express';
import dotenv from "dotenv";
import productRoutes from "./routes/productRoute.js"
import userRoutes from "./routes/userRoute.js"
import bodyParser from 'body-parser';
import connectDB from './config/database.js';
dotenv.config()

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(bodyParser.urlencoded ({ extended: false})) // form data
app.use(bodyParser.json()) // jsondata ko lagi

app.use(express.json());





app.get("/", (req, res) =>{
    res.json({
        status: "ok",
        version: "1.0.1",
        port: "5001",
    })
})


app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)





app.listen(PORT,() => {
    console.log(`Server is running in ${PORT}....`)
})