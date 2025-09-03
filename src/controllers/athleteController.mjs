import AthleteService from "../services/athleteService.mjs";
import AthleteProfile from "../models/athleteProfile.mjs"; // 👈 para validaciones directas
import mongoose from "mongoose";

const athleteService = new AthleteService();

export const obtenerAtletas = async (req, res) => {
  try {
    const atletas = await athleteService.obtenerTodos();
    res.json(atletas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const obtenerAtletaPorId = async (req, res) => {
  try {
    const atleta = await athleteService.obtenerPorId(req.params.id);
    res.json(atleta);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// 🔹 Crear atleta, vinculando al usuario logueado
export const crearAtleta = async (req, res) => {
  try {
    const userId = req.user.id; // viene del authMiddleware

    // evitar duplicados (un solo perfil por usuario)
    const yaExiste = await AthleteProfile.findOne({ owner: userId });
    if (yaExiste) {
      return res.status(400).json({ message: "Ya tenés un perfil creado" });
    }

    const nuevoAtleta = await athleteService.crear({
      ...req.body,
      owner: userId,
    });

    res.status(201).json(nuevoAtleta);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const obtenerMiPerfil = async (req, res) => {
  try {
    const userId = req.user.id;
    let perfil;

    // Verificar si es un ObjectId válido
    if (mongoose.Types.ObjectId.isValid(userId)) {
      perfil = await athleteService.buscarPorOwner(userId);
    } else {
      // Buscar por otro campo string, por ejemplo 'ownerSlug'
      perfil = await athleteService.athleteRepository.buscarPorOwnerSlug(userId);
    }

    if (!perfil) {
      return res.status(404).json({ message: "No se encontró perfil para este usuario" });
    }

    res.json(perfil);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Actualizar atleta (solo dueño puede hacerlo)
export const actualizarAtleta = async (req, res) => {
  try {
    const atleta = await athleteService.obtenerPorId(req.params.id);
    if (!atleta) return res.status(404).json({ message: "No encontrado" });

    if (String(atleta.owner) !== req.user.id) {
      return res.status(403).json({ message: "No autorizado" });
    }

    const actualizado = await athleteService.actualizar(req.params.id, req.body);
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 🔹 Eliminar atleta (solo dueño puede hacerlo)
export const eliminarAtleta = async (req, res) => {
  try {
    const atleta = await athleteService.obtenerPorId(req.params.id);
    if (!atleta) return res.status(404).json({ message: "No encontrado" });

    if (String(atleta.owner) !== req.user.id) {
      return res.status(403).json({ message: "No autorizado" });
    }

    await athleteService.eliminar(req.params.id);
    res.json({ message: "Atleta eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const buscarPorDisciplina = async (req, res) => {
  try {
    const { disciplina } = req.params;
    const atletas = await athleteService.buscarPorDisciplina(disciplina);
    res.json(atletas);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
