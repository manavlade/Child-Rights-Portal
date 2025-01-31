import { Quiz } from "../models/Quiz.js";

// Create a Quiz
export const createQuiz = async (req, res) => {
    try {
        const { title, content, questions } = req.body;

        if (!title || !content || !questions || questions.length === 0) {
            return res.status(400).json({ message: "Title, content, and questions are required." });
        }

        const newQuiz = new Quiz({ title, content, questions });
        await newQuiz.save();

        res.status(201).json({ message: "Quiz created successfully!", quiz: newQuiz });
    } catch (error) {
        console.error("Error creating quiz:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Fetch all Quizzes
export const getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json(quizzes);
    } catch (error) {
        console.error("Error fetching quizzes:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Fetch a Quiz by ID
export const getQuizById = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) {
            return res.status(404).json({ message: "Quiz not found" });
        }
        res.status(200).json(quiz);
    } catch (error) {
        console.error("Error fetching quiz:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Update a Quiz
export const updateQuiz = async (req, res) => {
    try {
        const { title, questions } = req.body;

        if (title?.trim() === "" || (questions && questions.length === 0)) {
            return res.status(400).json({ message: "Title cannot be empty and questions must be valid." });
        }

        const updatedQuiz = await Quiz.findByIdAndUpdate(
            req.params.id,
            { title: title?.trim(), questions },
            { new: true, runValidators: true }
        );

        if (!updatedQuiz) {
            return res.status(404).json({ message: "Quiz not found" });
        }

        res.status(200).json({ message: "Quiz updated successfully!", quiz: updatedQuiz });
    } catch (error) {
        console.error("Error updating quiz:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Delete a Quiz
export const deleteQuiz = async (req, res) => {
    try {
        const deletedQuiz = await Quiz.findByIdAndDelete(req.params.id);
        if (!deletedQuiz) {
            return res.status(404).json({ message: "Quiz not found" });
        }

        res.status(200).json({ message: "Quiz deleted successfully!" });
    } catch (error) {
        console.error("Error deleting quiz:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
