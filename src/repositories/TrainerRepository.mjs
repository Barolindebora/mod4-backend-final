import trainerProfile from "../models/trainerProfile.mjs";
import IRepository from "./IRepository.mjs";

class TrainerRepository extends IRepository {
    async obtenerPorId(id) {
        return await trainerProfile.findById(id).populate("atletas"); 
        // populate para ver los atletas asociados
    }

    async obtenerTodos() {
        return await trainerProfile.find().populate("atletas");
    }

    async crear(nuevoTrainer) {
        return await trainerProfile.create(nuevoTrainer);
    }

    async eliminar(id) {
        return await trainerProfile.findByIdAndDelete(id);
    }

    async actualizar(id, trainerActualizado) {
        return await trainerProfile.findByIdAndUpdate(id, trainerActualizado, { new: true });
    }

    // 🔎 Consulta especializada
    async buscarPorEspecialidad(especialidad) {
        return await trainerProfile.find({ especialidad });
    }

    async agregarAtleta(trainerId, atletaId) {
        return await trainerProfile.findByIdAndUpdate(
            trainerId,
            { $push: { atletas: atletaId } },
            { new: true }
        ).populate("atletas");
    }
}

export default TrainerRepository;