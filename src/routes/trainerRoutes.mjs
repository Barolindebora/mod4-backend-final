import { Router } from "express";
import {
  obtenerEntrenadores,
  obtenerEntrenadorPorId,
  crearEntrenador,
  actualizarEntrenador,
  eliminarEntrenador,
  buscarPorEspecialidad,
  
} from "../controllers/trainerController.mjs";

import {authMiddleware} from "../middlewares/authMiddleware.mjs";
const router = Router();

// Obtener todos los entrenadores
router.get("/", obtenerEntrenadores);

// Buscar entrenadores por especialidad (query string)
router.get("/buscar/especialidad", buscarPorEspecialidad);

// Crear nuevo entrenador
router.post("/", authMiddleware, crearEntrenador);

// Actualizar entrenador
router.put("/:id", authMiddleware, actualizarEntrenador);

// Eliminar entrenador
router.delete("/:id", authMiddleware, eliminarEntrenador);

// Obtener entrenador por ID
router.get("/:id", obtenerEntrenadorPorId);

export default router;
