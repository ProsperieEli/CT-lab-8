//CRUD routers
const { Router } = require('express');
const OrderService = require('../services/TextService');

module.exports = Router()

  .post('/', async (req, res, next) => {
    try {
      const createOrder = await OrderService.createOrder(req.body.quantity);

      res.send(createOrder);
    } catch (err) {
      next(err);
    }
  })
  .get('/api/v1/text/:id', async (req, res, next) => {
    try {
      const { id } = await req.params;

      res.send(id);
    } catch(err) {
      next(err);
    }
  })
  .put('/api/v1/text/:id', async (req, res, next) => {
    try {
      const { id } = await [req.params, req.body.quantity];

      res.send(id);
    } catch(err) {
      next(err);
    }
  })
  .delete('/:id', async(req, res, next) => {
    try{
      const { id } = await req.params;
      res.send(id);
    }catch(err) {
      next(err);
    }
  });
