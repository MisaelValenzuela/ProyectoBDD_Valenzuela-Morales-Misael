import express from "express";
import { crearEquipo, getAll, getEquipo } from "../controllers/BlogController.js";
const router = express.Router();
router.get('/',getAll);
router.get('/:Año',getEquipo);
router.post('/',crearEquipo);

export default router