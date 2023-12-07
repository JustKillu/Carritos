import { getUser } from '../database/db.js'; 
import jwt from 'jsonwebtoken'; 

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await getUser(username, password);

        if (!user) {
            return res.status(400).json({ success: false, message: 'Usuario no encontrado' });
        }

        const token = jwt.sign({ username: username }, 'yourSecretKey',{expiresIn:'20m'});

        return res.json({ success: true, message: 'Inicio de sesión exitoso', token: token });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Error del servidor' });
    }
};
