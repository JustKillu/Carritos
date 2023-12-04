import express from 'express';
import cors from 'cors';
import modelosRouter from './routes/modelosRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/modelos', modelosRouter);
app.get('/', function (req, res) {
  res.send('¡Hola Mundo!');
});

app.listen(3000, function () {
  console.log('La aplicación está escuchando en el puerto 3000!');
});
