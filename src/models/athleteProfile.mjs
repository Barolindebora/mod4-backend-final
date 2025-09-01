import mongoose from "mongoose";

const athleteProfileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true }, // Ej: "ARG"
    club: { type: String, default: null },
    category: { type: String, required: true }, // Ej: "MASC 11-12"
    level: { type: String, required: true }, // Ej: "A", "B"
    discipline: { type: String, required: true }, // Ej: "Trampolín"
    apparatus: { type: [String], default: [] }, // Ej: ["Tumbling", "Double Mini"]
    picture: { type: String, default: null },
    description: { type: String, default: "" },

    ranking: { type: Number, default: null },

    medals: {
      gold: { type: Number, default: 0 },
      silver: { type: Number, default: 0 },
      bronze: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

export default mongoose.model("AthleteProfile", athleteProfileSchema);