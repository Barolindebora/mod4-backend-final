import { Router } from "express";
import {
  obtenerEntrenadores,
  obtenerEntrenadorPorId,
  crearEntrenador,
  actualizarEntrenador,
  eliminarEntrenador,
  buscarPorEspecialidad,
  agregarAtleta
} from "../controllers/trainerController.mjs";

const router = Router();

// Obtener todos los entrenadores
router.get("/", obtenerEntrenadores);

// Obtener entrenador por ID
router.get("/:id", obtenerEntrenadorPorId);

// Buscar entrenadores por especialidad (query string)
router.get("/buscar/especialidad", buscarPorEspecialidad);

// Crear nuevo entrenador
router.post("/", crearEntrenador);

// Actualizar entrenador
router.put("/:id", actualizarEntrenador);

// Eliminar entrenador
router.delete("/:id", eliminarEntrenador);

// Agregar atleta a entrenador
router.post("/agregar-atleta", agregarAtleta);

export default router;
