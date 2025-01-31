import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { createContent, deleteContent, getAllContent, getContentByAgeGroup, getContentById, updateContent } from "../Controller/content.controller.js";

const router = express.Router();

router.route('/createcontent').post(isAuthenticated, createContent);

router.route('/getallcontent').get(isAuthenticated, getAllContent);

router.route('/content/:id').get(isAuthenticated, getContentById);

router.get('/content/ageGroup/:ageGroup', isAuthenticated, getContentByAgeGroup);

router.route('/content/:id').put(isAuthenticated, updateContent);

router.route('/deletecontent/:id').delete(isAuthenticated, deleteContent);


export default router;
