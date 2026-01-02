import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
    brand: {
        type: String,
        
    },
    category: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
        min: 0,
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },

    rating:{
        type: Number,
        default: 5,
        min: 0,
        max: 5,
    },
    description: String,

    imageUrls:{
        type: [String],

    }



    // updatedAt:{},
    // deletedAt:{},
});

const model = mongoose.model("Product", productSchema)

export default model;