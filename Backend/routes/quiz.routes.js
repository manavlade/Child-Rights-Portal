import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { createQuiz, deleteQuiz, getAllQuizzes, getQuizById, updateQuiz } from "../Controller/Quiz.controller.js";

const router = express.Router();

router.route('/quizzes').post(isAuthenticated, createQuiz);

router.route('/getallquizzes').get(isAuthenticated, getAllQuizzes);

router.route('/quizzes/:id').get(isAuthenticated, getQuizById);

router.route('/quizzes/:id').put(isAuthenticated, updateQuiz);

router.route('/quizzes/:id').delete(isAuthenticated, deleteQuiz);

export default router;
