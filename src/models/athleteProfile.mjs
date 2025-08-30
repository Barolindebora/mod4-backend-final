import mongoose from "mongoose";

const athleteProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  disciplina: { type: String, required: true },
  ranking: { type: Number, default: null },
  pais: { type: String }
}, { timestamps: true });

export default mongoose.model("AthleteProfile", athleteProfileSchema);