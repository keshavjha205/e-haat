import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "",
        unique: true,
        trim: true
    },
    image: {
        url: { type: String, required: true },
        public_id: { type: String, required: true }
    },
    slug: {
        type: String, //  URL-friendly names 
        unique: true,
        lowercase: true
    }
}, { timestamps: true })

export const CategoryModel = mongoose.model('category', categorySchema)