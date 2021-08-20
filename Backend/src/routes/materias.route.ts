import { Router } from "express";
const router = Router()


import { createMaterias, deleteMateria, getMateria, getMaterias, updateMaterias } from "../controllers/materias.controll";

router.get("/materias", getMaterias);
router.post("/materias", createMaterias);
router.get("/materias/:id", getMateria);
router.put("/materias/:id", updateMaterias);
router.delete("/materias/:id", deleteMateria);

export default router