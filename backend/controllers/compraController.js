import { insertCompra } from '../database/db.js'; 

export const createCompra = (req, res) => {
  const { nombre, apellido, correo, modelo, estado } = req.body;

  if (!nombre.trim() || !apellido.trim() || !correo.trim() || !modelo.trim() || !estado.trim()) {
    return res.status(400).json({ message: 'Por favor, completa todos los campos.' });
  }

  insertCompra(nombre, apellido, correo, modelo, estado)
    .then(results => {
      console.log('Success:', results);
      res.status(201).json({ message: 'Compra realizada con éxito.' });
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).json({ message: 'Hubo un error al procesar tu solicitud.' });
    });
};
