import mongoose from "mongoose";

const athleteProfileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    club: { type: String, default: null },
    category: { type: String, required: true },
    level: { type: String, required: true },
    discipline: { type: String, required: true },
    apparatus: { type: [String], default: [] },
    picture: { type: String, default: null },
    description: { type: String, default: "" },
    ranking: { type: Number, default: null },
    medals: {
      gold: { type: Number, default: 0 },
      silver: { type: Number, default: 0 },
      bronze: { type: Number, default: 0 },
    },

    // 🔑 Vínculo con el usuario
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true, // cada usuario puede tener solo 1 perfil de atleta
    },
  },
  { timestamps: true }
);

export default mongoose.model("AthleteProfile", athleteProfileSchema);