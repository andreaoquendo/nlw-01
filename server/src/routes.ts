/* Como o projeto vai ter muitas rotas, é melhor utilizar um arquivo só para as rotas. */

import express from 'express';
// aqui eu poderia usar o path?
// porque do database e não do próprio knex?
import knex from './database/connection';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

// serve para desacoplar as rotas para poder usar em outro arquivo
// index, show, create, update, delete
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// ele arranja esse items do database?
// nao enteni mt bem ese async e await
routes.get('/items', itemsController.index);

// por que eu posso receber sem os parâmetros?
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
export default routes;