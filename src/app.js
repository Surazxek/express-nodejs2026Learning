import express from 'express';
import dotenv from "dotenv";
import productRoutes from "./routes/productRoute.js"
import userRoutes from "./routes/userRoute.js"
import authRoutes from "./routes/authRoutes.js"
import bodyParser from 'body-parser';
import connectDB from './config/database.js';
import logger from './middlewares/logger.js';
import connectCloudinary from './config/cloudinary.js';
import multer from 'multer';
dotenv.config()

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();
connectCloudinary();

const upload = multer({
    storage: multer.memoryStorage(),
})

// Middleware
app.use(logger);                  // custom logger
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());





app.get("/", (req, res) =>{
    res.json({
        status: "ok",
        version: "1.0.1",
        port: "5001",
    })
})




app.use("/api/products",upload.array("images", 5), productRoutes) //multiple ko liagi array ra maximum kato oota halne re.files ma auuxa multiple
app.use("/api/users", upload.single("image"), userRoutes)
app.use("/api/auth", authRoutes)


//Global middleware




app.listen(PORT,() => {
    console.log(`Server is running in ${PORT}....`)
})