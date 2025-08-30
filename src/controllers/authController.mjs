import AuthService from "../services/authService.mjs";

const authService = new AuthService();

export const register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { token, user } = await authService.login(req.body);
    res.json({ token, user });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};