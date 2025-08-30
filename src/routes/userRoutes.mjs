import { Router } from "express";
import {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
 eliminarUsuario,
  buscarPorEmail
} from "../controllers/userController.mjs";

const router = Router();

// Obtener todos los usuarios
router.get("/", obtenerUsuarios);

// Obtener usuario por ID
router.get("/:id", obtenerUsuarioPorId);

// Crear nuevo usuario
router.post("/", crearUsuario);

// Actualizar usuario
router.put("/:id", actualizarUsuario);

// Eliminar usuario
router.delete("/:id", eliminarUsuario);

// Ejemplo futuro: buscar usuarios por email o rol
// router.get("/buscar", buscarPorEmailOrol);

export default router;