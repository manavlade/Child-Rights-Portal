import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Content", // This references the Content schema
        required: true
    },
    questions: [{
        question: {
            type: String,
            required: true
        },
        options: [{
            type: String,
            required: true
        }],
        correctAnswer: {
            type: String,
            required: true
        }
    }]
}, { timestamps: true });

export const Quiz = mongoose.model("Quiz", quizSchema);
