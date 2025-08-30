import { Router } from "express";
import {
  obtenerAtletas,
  obtenerAtletaPorId,
  buscarPorDisciplina,
  crearAtleta,
  actualizarAtleta,
  eliminarAtleta,
} from "../controllers/athleteController.mjs";

const router = Router();

// Obtener todos los atletas
router.get("/", obtenerAtletas);



// Obtener atleta por ID
router.get("/:id", obtenerAtletaPorId);

// Buscar atletas por disciplina
router.get("/disciplina/:disciplina", buscarPorDisciplina);

// Crear nuevo atleta
router.post("/", crearAtleta);

// Actualizar atleta por ID
router.put("/:id", actualizarAtleta);

// Eliminar atleta por ID
router.delete("/:id", eliminarAtleta);

export default router;