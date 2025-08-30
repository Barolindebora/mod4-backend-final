import TrainerRepository from "../repositories/TrainerRepository.mjs";

class TrainerService {
    constructor() {
        this.trainerRepository = new TrainerRepository();
    }

    async obtenerTodos() {
        return await this.trainerRepository.obtenerTodos();
    }

    async obtenerPorId(id) {
        const trainer = await this.trainerRepository.obtenerPorId(id);
        if (!trainer) throw new Error("Entrenador no encontrado");
        return trainer;
    }

    async crear(nuevoTrainer) {
        return await this.trainerRepository.crear(nuevoTrainer);
    }

    async actualizar(id, datos) {
        const actualizado = await this.trainerRepository.actualizar(id, datos);
        if (!actualizado) throw new Error("No se pudo actualizar el entrenador");
        return actualizado;
    }

    async eliminar(id) {
        const eliminado = await this.trainerRepository.eliminar(id);
        if (!eliminado) throw new Error("No se pudo eliminar el entrenador");
        return eliminado;
    }

    async buscarPorEspecialidad(especialidad) {
        return await this.trainerRepository.buscarPorEspecialidad(especialidad);
    }

    async agregarAtleta(trainerId, atletaId) {
        return await this.trainerRepository.agregarAtleta(trainerId, atletaId);
    }
}

export default TrainerService;