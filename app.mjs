import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/config/dbconfig.mjs";

// Rutas
import athleteRoutes from "./src/routes/athleteRoutes.mjs";
import trainerRoutes from "./src/routes/trainerRoutes.mjs";
import userRoutes from "./src/routes/userRoutes.mjs";
import authRoutes from "./src/routes/authRoutes.mjs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear JSON y habilitar CORS
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
connectDB();

// Rutas principales
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

app.use("/api/athletes", athleteRoutes);
app.use("/api/trainers", trainerRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


// Inicializar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
});