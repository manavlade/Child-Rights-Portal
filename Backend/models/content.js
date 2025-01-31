import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        type: {
            type: String,
            enum: ['video', 'game', 'quiz'],
            required: true
        },
        description: {
            type: String
        },
        ageGroup: {
            type: String,
            required: true
        }, // Example: '6-8', '9-12'
        
        tags: [{
            type: String
        }]
    }, { timestamps: true });

export const Content = mongoose.model('Content', contentSchema);