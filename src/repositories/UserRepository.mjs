import User from "../models/user.mjs";
import IRepository from "./IRepository.mjs";

class UserRepository extends IRepository {
    async obtenerPorId(id) {
        return await User.findById(id);
    }

    async obtenerTodos() {
        return await User.find();
    }

    async crear(nuevoUsuario) {
        return await User.create(nuevoUsuario);
    }

    async eliminar(id) {
        return await User.findByIdAndDelete(id);
    }

    async actualizar(id, usuarioActualizado) {
        return await User.findByIdAndUpdate(id, usuarioActualizado, { new: true });
    }

    // 🔎 Consultas especializadas
    async buscarPorEmail(email) {
        return await User.findOne({ email });
    }

    async buscarPorRol(rol) {
        return await User.find({ rol });
    }
}

export default UserRepository;