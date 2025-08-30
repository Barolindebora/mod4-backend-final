//puede cambiar el nivel de los atletas y agregar disciplinas import mongoose from "mongoose";
import mongoose from "mongoose";

const trainerProfileSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true, 
    unique: true // un entrenador = un usuario
  },
  especialidad: { type: String, required: true },  // Ej: "Trampolín", "Artística"
  experiencia: { type: Number, default: 0 },       // años de experiencia
  atletas: [{ type: mongoose.Schema.Types.ObjectId, ref: "AthleteProfile" }], // entrenados
  pais: { type: String },
  club: { type: String } // club/centro donde trabaja
}, { timestamps: true });

export default mongoose.model("TrainerProfile", trainerProfileSchema);