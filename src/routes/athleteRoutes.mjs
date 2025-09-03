import { Router } from "express";
import {
  obtenerAtletas,
  obtenerAtletaPorId,
  buscarPorDisciplina,
  crearAtleta,
  actualizarAtleta,
  eliminarAtleta,
  obtenerMiPerfil
} from "../controllers/athleteController.mjs";
import {authMiddleware} from "../middlewares/authMiddleware.mjs";

const router = Router();

// Obtener todos los atletas
router.get("/", obtenerAtletas);


//obtener mi perfil
router.get("/me", authMiddleware, obtenerMiPerfil);
// Obtener atleta por ID
router.get("/:id",  obtenerAtletaPorId);

// Buscar atletas por disciplina
router.get("/disciplina/:disciplina", buscarPorDisciplina);

// Crear nuevo atleta
router.post("/", authMiddleware,crearAtleta);

// Actualizar atleta por ID
router.put("/:id", authMiddleware, actualizarAtleta);

// Eliminar atleta por ID
router.delete("/:id", authMiddleware, eliminarAtleta);



export default router;