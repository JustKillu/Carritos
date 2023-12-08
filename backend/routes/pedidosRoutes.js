import comprasController from '../controllers/pedidosController.js';
import express from 'express';
const router = express.Router();

router.get('/', async function (req, res, next) {
      const resultados = await comprasController.todos();
      res.json(resultados);
});

router.post('/', async function(req, res, next) {
      const resultados = await comprasController.new(req.body);
      res.json(resultados);
});

router.get("/:id", async function(req, res, next) {
      const resultados = await comprasController.search(req.params.id);
      res.send(resultados);
});

router.put("/:id", async function(req, res, next) {
      const resultados = await comprasController.update(req.params.id , req.body);
      res.send(resultados);
});

router.delete("/:id", async function(req, res, next) {
      const resultados = await comprasController.delete(req.params.id);
      res.send(resultados);
})

export default router;
