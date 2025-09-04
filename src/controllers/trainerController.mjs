import TrainerService from "../services/trainerService.mjs";
import TrainerProfile from "../models/trainerProfile.mjs"; 
import mongoose from "mongoose";

const trainerService = new TrainerService();

export const obtenerEntrenadores = async (req, res) => {
  try {
    const entrenadores = await trainerService.obtenerTodos();
    res.json(entrenadores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const obtenerEntrenadorPorId = async (req, res) => {
  try {
    const entrenador = await trainerService.obtenerPorId(req.params.id);
    res.json(entrenador);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// 🔹 Crear entrenador, vinculando al usuario logueado
export const crearEntrenador = async (req, res) => {
  try {
    const userId = req.user.id; // viene del authMiddleware

    // evitar duplicados (un solo perfil por usuario)
    const yaExiste = await TrainerProfile.findOne({ owner: userId });
    if (yaExiste) {
      return res.status(400).json({ message: "Ya tenés un perfil de entrenador creado" });
    }

    const nuevoEntrenador = await trainerService.crear({
      ...req.body,
      owner: userId,
    });

    res.status(201).json(nuevoEntrenador);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 🔹 Obtener mi perfil de entrenador
export const obtenerMiPerfil = async (req, res) => {
  try {
    const userId = req.user.id;
    let perfil;

    if (mongoose.Types.ObjectId.isValid(userId)) {
      perfil = await trainerService.buscarPorOwner(userId);
    }

    if (!perfil) {
      return res.status(404).json({ message: "No se encontró perfil de entrenador para este usuario" });
    }

    res.json(perfil);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Actualizar entrenador (solo dueño puede hacerlo)
export const actualizarEntrenador = async (req, res) => {
  try {
    const entrenador = await trainerService.obtenerPorId(req.params.id);
    if (!entrenador) return res.status(404).json({ message: "No encontrado" });

    if (String(entrenador.owner) !== req.user.id) {
      return res.status(403).json({ message: "No autorizado" });
    }

    const actualizado = await trainerService.actualizar(req.params.id, req.body);
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 🔹 Eliminar entrenador (solo dueño puede hacerlo)
export const eliminarEntrenador = async (req, res) => {
  try {
    const entrenador = await trainerService.obtenerPorId(req.params.id);
    if (!entrenador) return res.status(404).json({ message: "No encontrado" });

    if (String(entrenador.owner) !== req.user.id) {
      return res.status(403).json({ message: "No autorizado" });
    }

    await trainerService.eliminar(req.params.id);
    res.json({ message: "Entrenador eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 🔹 Buscar por especialidad
export const buscarPorEspecialidad = async (req, res) => {
  try {
    const { especialidad } = req.params;
    const entrenadores = await trainerService.buscarPorEspecialidad(especialidad);
    res.json(entrenadores);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
