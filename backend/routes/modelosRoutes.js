import modelosController from '../controllers/ModelosController.js';
import express from 'express';
const router = express.Router();

router.get('/', async function (req, res, next) {
      const resultados = await modelosController.todos();
      res.json(resultados);
});

router.post('/', async function(req, res, next) {
      const resultados = await modelosController.new(req.body);
      res.json(resultados);
});

router.get("/:id", async function(req, res, next) {
      const resultados = await modelosController.search(req.params.id);
      res.send(resultados);
});

router.put("/:id", async function(req, res, next) {
      const resultados = await modelosController.update(req.params.id , req.body);
      res.send(resultados);
});

router.delete("/:id", async function(req, res, next) {
      const resultados = await modelosController.delete(req.params.id);
      res.send(resultados);
})

export default router;
