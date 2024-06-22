import express from 'express';
import controller from './controllers/productsController.js';

const routes = express.Router();

routes.post('/products', controller.newProduct);
routes.get('/products', controller.listProducts);

export default routes;