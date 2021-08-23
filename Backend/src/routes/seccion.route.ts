import { Router } from "express";
const router = Router();

import {
  getSeccionesPorGrado,
  getSecciones,
  createSeccion,
  getSeccion,
  updateSeccion,
  deleteSeccion,
} from "../controllers/secciones.controll";

router.get("/seccion", getSecciones);
router.get("/secciones/:id_grado", getSeccionesPorGrado);
router.post("/seccion", createSeccion);
router.get("/seccion/:id", getSeccion);
router.put("/seccion", updateSeccion);
router.delete("/seccion/:id", deleteSeccion);

export default router;
