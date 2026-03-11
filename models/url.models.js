import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortCode: {
        type: String,
        unique: true
    },
    clicks: {
        type: Number,
        default: 0
    },
}, {timestamps: true})

const Url = mongoose.model("url",urlSchema)
export default Url