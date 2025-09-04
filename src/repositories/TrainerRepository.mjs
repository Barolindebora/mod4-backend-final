import mongoose from "mongoose";
import TrainerProfile from "../models/trainerProfile.mjs";
import IRepository from "./IRepository.mjs";

class TrainerRepository extends IRepository {
    async obtenerPorId(id) {
        return await TrainerProfile.findById(id);
    }

    async obtenerTodos() {
        return await TrainerProfile.find();
    }

    async buscarPorEspecialidad(especialidad) {
        return await TrainerProfile.find({ especialidad });
    }

    async crear(nuevoTrainer) {
        return await TrainerProfile.create(nuevoTrainer);
    }

    async eliminar(id) {
        return await TrainerProfile.findByIdAndDelete(id);
    }

    async actualizar(id, trainerActualizado) {
        return await TrainerProfile.findByIdAndUpdate(id, trainerActualizado, { new: true });
    }

    // Buscar perfil por ownerId (ObjectId)
    async buscarPorOwner(ownerId) {
        if (!mongoose.Types.ObjectId.isValid(ownerId)) return null;
        return await TrainerProfile.findOne({ owner: ownerId });
    }

    // Buscar perfil por slug u otro identificador string (opcional)
    async buscarPorOwnerSlug(slug) {
        return await TrainerProfile.findOne({ ownerSlug: slug });
    }
}

export default TrainerRepository;