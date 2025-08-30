import UserService from "../services/userService.mjs";

const userService = new UserService();

export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await userService.obtenerTodos();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await userService.obtenerPorId(req.params.id);
    res.json(usuario);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = await userService.crear(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const actualizarUsuario = async (req, res) => {
  try {
    const actualizado = await userService.actualizar(req.params.id, req.body);
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const eliminarUsuario = async (req, res) => {
  try {
    await userService.eliminar(req.params.id);
    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const buscarPorEmail = async (req, res) => {
  try {
    const { email } = req.query;
    const usuario = await userService.buscarPorEmail(email);
    res.json(usuario);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const buscarPorRol = async (req, res) => {
  try {
    const { rol } = req.query;
    const usuarios = await userService.buscarPorRol(rol);
    res.json(usuarios);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};