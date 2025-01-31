import express from "express";
import { getUserDetails, login, logout, register, updateUserProgress } from "../Controller/user.controller.js"
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route('/register').post(register);

router.route('/login').post(login);

router.route('/logout').get(logout);

router.route('/').get(isAuthenticated, getUserDetails);

router.route('/progress').put(isAuthenticated, updateUserProgress);


export default router;
