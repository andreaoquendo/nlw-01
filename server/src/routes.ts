/* Como o projeto vai ter muitas rotas, é melhor utilizar um arquivo só para as rotas. */

import express from 'express';

// serve para desacoplar as rotas para poder usar em outro arquivo
const routes = express.Router();

// Página padrão
routes.get('/', (request, response)=>{
    return response.json({ });
});

export default routes;