import express from 'express';
import cors from 'cors';
import modelosRouter from './routes/modelosRoutes.js';
import pedidosRouter from './routes/pedidosRoutes.js';
import authRouter from './routes/authRoutes.js';
import userRoutes from './routes/registerRoutes.js';
import compraRoutes from './routes/compraRoutes.js';

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/modelos', modelosRouter);
app.use('/pedidos', pedidosRouter);
app.use('/', authRouter);
app.use('/', userRoutes);
app.use('/', compraRoutes);

app.listen(3000, function () {
  console.log('La aplicación está escuchando en el puerto 3000!');
});
