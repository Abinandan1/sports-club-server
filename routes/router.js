import express from "express";
import { contactEmail } from "../controllers/sendEmail.js";

const router = express.Router();

router.post("/contact", contactEmail);

export default router;
