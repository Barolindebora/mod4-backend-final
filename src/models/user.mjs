import mongoose from "mongoose";

export const ROLES = {
  VISITANTE: "visitante",
  ATLETA: "atleta",
  ENTRENADOR: "entrenador",
  ADMIN: "admin"
};

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: Object.values(ROLES),
    default: ROLES.VISITANTE
  },
  country: { type: String, required: true },
  
}, { timestamps: true });

export default mongoose.model("User", userSchema);