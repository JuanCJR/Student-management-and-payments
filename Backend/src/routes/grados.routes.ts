import { Router } from "express";
const router = Router()

import { createGrados, deleteGrado, getGrado, getGrados, updateGrado, } from "../controllers/grados.controll"


router.get("/grados", getGrados);
router.post("/grados", createGrados);
router.get("/grados/:id", getGrado);
router.put("/grados/:id", updateGrado);
router.delete("/grados/:id", deleteGrado);

export default router