import express from 'express';
import { searchUser } from '../controllers/search.controller.js';
const router= express.Router();

router.post("/navbar",searchUser)

export default router;