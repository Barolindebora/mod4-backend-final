import TrainerService from "../services/trainerService.mjs";

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

export const crearEntrenador = async (req, res) => {
  try {
    const nuevoEntrenador = await trainerService.crear(req.body);
    res.status(201).json(nuevoEntrenador);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const actualizarEntrenador = async (req, res) => {
  try {
    const actualizado = await trainerService.actualizar(req.params.id, req.body);
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const eliminarEntrenador = async (req, res) => {
  try {
    await trainerService.eliminar(req.params.id);
    res.json({ message: "Entrenador eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const buscarPorEspecialidad = async (req, res) => {
  try {
    const { especialidad } = req.query;
    const entrenadores = await trainerService.buscarPorEspecialidad(especialidad);
    res.json(entrenadores);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const agregarAtleta = async (req, res) => {
  try {
    const { trainerId, atletaId } = req.body;
    const actualizado = await trainerService.agregarAtleta(trainerId, atletaId);
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};