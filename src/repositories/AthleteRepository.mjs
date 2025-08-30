import athleteProfile from "../models/athleteProfile.mjs";
import IRepository from "./IRepository.mjs";

class AthleteRepository extends IRepository {
    async obtenerPorId(id) {
        return await athleteProfile.findById(id);
    }

    async obtenerTodos() {
        return await athleteProfile.find();
    }

    async buscarPorDisciplina(disciplina) {
        return await athleteProfile.find({ disciplina });
    }

    async crear(nuevoAtleta) {
        return await athleteProfile.create(nuevoAtleta);
    }

    async eliminar(id) {
        return await athleteProfile.findByIdAndDelete(id);
    }

    async actualizar(id, atletaActualizado) {
        return await athleteProfile.findByIdAndUpdate(id, atletaActualizado, { new: true });
    }
}

export default AthleteRepository;