import express from "express";
import { addMessage, getAbout, getEducation, getExperience, getPortfolio, getGallery } from "../controllers/apiController.js";
import { authenticateApiKey } from "../controllers/tokenverifier.js"
import { contactValidation } from "../validators/validator.js";
const router = express.Router()

//GET
router.get("/education", authenticateApiKey, getEducation)
router.get("/experience", authenticateApiKey, getExperience)
router.get("/portfolio", authenticateApiKey, getPortfolio)
router.get("/about", authenticateApiKey, getAbout)
router.get("/gallery", authenticateApiKey, getGallery)

//POST
router.post("/contact", authenticateApiKey, contactValidation, addMessage)

export default router