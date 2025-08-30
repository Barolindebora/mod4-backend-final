import AthleteRepository from "../repositories/AthleteRepository.mjs";

class AthleteService {
    constructor() {
        this.athleteRepository = new AthleteRepository();
    }

    async obtenerTodos() {
        return await this.athleteRepository.obtenerTodos();
    }

    async obtenerPorId(id) {
        const atleta = await this.athleteRepository.obtenerPorId(id);
        if (!atleta) throw new Error("Atleta no encontrado");
        return atleta;
    }

    async crear(nuevoAtleta) {
        return await this.athleteRepository.crear(nuevoAtleta);
    }

    async actualizar(id, datos) {
        const actualizado = await this.athleteRepository.actualizar(id, datos);
        if (!actualizado) throw new Error("No se pudo actualizar el atleta");
        return actualizado;
    }

    async eliminar(id) {
        const eliminado = await this.athleteRepository.eliminar(id);
        if (!eliminado) throw new Error("No se pudo eliminar el atleta");
        return eliminado;
    }

    async buscarPorDisciplina(disciplina) {
        return await this.athleteRepository.buscarPorDisciplina(disciplina);
    }
}

export default AthleteService;