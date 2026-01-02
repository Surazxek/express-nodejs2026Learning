import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const status = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`mongoDB Connected: ${status.connection.host}`);
    } catch (error) {
        console.log("Can't connect MongoDB, Error")
        
        process.exit(1);
    }
};

export default connectDB;