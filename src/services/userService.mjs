import UserRepository from "../repositories/UserRepository.mjs";

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async obtenerTodos() {
        return await this.userRepository.obtenerTodos();
    }

    async obtenerPorId(id) {
        const user = await this.userRepository.obtenerPorId(id);
        if (!user) throw new Error("Usuario no encontrado");
        return user;
    }

    async crear(nuevoUsuario) {
        return await this.userRepository.crear(nuevoUsuario);
    }

    async actualizar(id, datos) {
        const actualizado = await this.userRepository.actualizar(id, datos);
        if (!actualizado) throw new Error("No se pudo actualizar el usuario");
        return actualizado;
    }

    async eliminar(id) {
        const eliminado = await this.userRepository.eliminar(id);
        if (!eliminado) throw new Error("No se pudo eliminar el usuario");
        return eliminado;
    }

    async buscarPorEmail(email) {
        return await this.userRepository.buscarPorEmail(email);
    }

    async buscarPorRol(rol) {
        return await this.userRepository.buscarPorRol(rol);
    }
}

export default UserService;
