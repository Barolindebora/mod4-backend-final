import mongoose from "mongoose";

const trainerProfileSchema = new mongoose.Schema(
  {
    // 🔑 Vínculo con el usuario (un usuario = un entrenador)
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    name: { type: String, required: true },       // nombre del entrenador
    country: { type: String, required: true },    // país
    club: { type: String, default: null },        // club/centro donde trabaja
    especialidad: { type: String, required: true }, // Ej: "Trampolín", "Artística"
    experiencia: { type: Number, default: 0 },    // años de experiencia
    picture: { type: String, default: null },     // foto de perfil
    description: { type: String, default: "" },   // bio/presentación
  },
  { timestamps: true }
);

export default mongoose.model("TrainerProfile", trainerProfileSchema);