import express from 'express';
import { createCompra } from '../controllers/compraController.js';

const router = express.Router();

router.post('/compra', createCompra);

export default router;
