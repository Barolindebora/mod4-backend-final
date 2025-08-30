import mongoose from "mongoose";

export const ROLES = {
  VISITANTE: "visitante",
  ATLETA: "atleta",
  ENTRENADOR: "entrenador",
  ADMIN: "admin"
};

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: {
    type: String,
    enum: Object.values(ROLES),
    default: ROLES.VISITANTE
  }
}, { timestamps: true });

export default mongoose.model("User", userSchema);