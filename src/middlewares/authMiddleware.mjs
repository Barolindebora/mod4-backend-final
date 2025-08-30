import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "mi_secreto_super_seguro";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Token requerido" });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded; // Guardamos los datos del token en la request
    next();
  } catch {
    res.status(403).json({ message: "Token inválido" });
  }
};