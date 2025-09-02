import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.mjs";

const SECRET = process.env.JWT_SECRET || "mi_secreto_super_seguro";

class AuthService {
async register({ name, email, password, role, country }) {
  // Verificar si ya existe el email
  const existe = await User.findOne({ email });
  if (existe) throw new Error("El email ya está registrado");

  // Encriptar contraseña
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    role,
    country
  });

  await user.save();
  return user;
}

  async login({ email, password }) {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Credenciales inválidas");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Wrong password");

    // Generar token
    const token = jwt.sign(
      { id: user._id, rol: user.role },
      SECRET,
      { expiresIn: "1h" }
    );

    return { token, user };
  }

  verifyToken(token) {
    try {
      return jwt.verify(token, SECRET);
    } catch {
      throw new Error("Token inválido o expirado");
    }
  }
}

export default AuthService;