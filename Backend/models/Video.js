import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    duration: {
        type: Number // in seconds
    },
    transcript: {
        type: String // optional text for accessibility
    }
}, { timestamps: true })

export const Video = mongoose.model('Video', videoSchema);