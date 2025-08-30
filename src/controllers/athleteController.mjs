import AthleteService from "../services/athleteService.mjs";

const athleteService = new AthleteService();

export const obtenerAtletas = async (req, res) => {
  try {
    const atletas = await athleteService.obtenerTodos();
    res.json(atletas);
    console.log("funcionando la ruta");
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

export const crearAtleta = async (req, res) => {
  try {
    const nuevoAtleta = await athleteService.crear(req.body);
    res.status(201).json(nuevoAtleta);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const actualizarAtleta = async (req, res) => {
  try {
    const actualizado = await athleteService.actualizar(req.params.id, req.body);
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const eliminarAtleta = async (req, res) => {
  try {
    await athleteService.eliminar(req.params.id);
    res.json({ message: "Atleta eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const buscarPorDisciplina = async (req, res) => {
  try {
    const { disciplina } = req.query;
    const atletas = await athleteService.buscarPorDisciplina(disciplina);
    res.json(atletas);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};