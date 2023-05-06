import express from "express";
import { addMessage, getEducation, getExperience, getPortfolio } from "../controllers/apiController.js";
import { authenticateApiKey } from "../controllers/tokenverifier.js"
import { contactValidation } from "../validators/validator.js";
const router = express.Router()

//GET
router.get("/education", authenticateApiKey, getEducation)
router.get("/experience", authenticateApiKey, getExperience)
router.get("/portfolio", authenticateApiKey, getPortfolio)

//POST
router.post("/contact", authenticateApiKey, contactValidation, addMessage)

export default router