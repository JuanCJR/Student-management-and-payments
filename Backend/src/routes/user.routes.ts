import { Router } from "express";
const router = Router()

import { createUser, updateUser, deleteUser, getAlumno, getAlumnos } from "../controllers/user.controllers"

router.get("/alumno", getAlumnos);
router.post("/alumno", createUser);
router.get("/alumno/:id_alumno", getAlumno);
router.put("/alumno/:id", updateUser);
router.delete("/alumno/:id", deleteUser);

export default router