import { getUserByUsername, insertUser } from '../database/db.js';

export const register = async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await getUserByUsername(username);
        if (existingUser) {
            return res.status(400).json({ message: 'El nombre de usuario ya existe' });
        }
        await insertUser(username, password);
        res.json({ message: 'Usuario registrado con éxito' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error del servidor' });
    }
};
