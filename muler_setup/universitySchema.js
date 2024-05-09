import mongoose from "mongoose";

const universitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    approvedBy:{
        type: Array,
        required: true
    },
    estdYear: {
        type: String,
        required: true
    }, 
    programesOffer: {
        type: String,
        required: true
    },
    courses:{
        type: Array,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
}, {timestamps: true})

const University = mongoose.model("University", universitySchema);

export default University;