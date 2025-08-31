import mongoose from "mongoose";

const athleteProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  disciplina: { type: String, required: true },
  ranking: { type: Number, default: null },

  medals: {
    gold: { type: Number, default: 0 },
    silver: { type: Number, default: 0 },
    bronze: { type: Number, default: 0 }
  },
  category: { type: String, required: true },
  picture: { type: String, default: null },
  apparatus: { type: [String], default: null },
  club: { type: String, default: null },
}, { timestamps: true });

export default mongoose.model("AthleteProfile", athleteProfileSchema);