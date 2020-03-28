const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

















/*
Rota é a expressão do link
Recurso é o /nome que tá dentro da rota
*/

/**
 * Método http:
 * 
 * GET: buscar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backedn
 * 
 * ***O só com o Get já da pra fazer todos os métodos acima, mas semanticamente não é o melhor a ser feito.
 * 
 * 
 */


 /**
  * tipos de parâmetros:
  * 
  * Query Params: parametros nomeados enviados na rota aoós o símbolo de ? (filtros, paginação)
  * Route Params: parametros utilizados para identificar recursos  -> /:id
  * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */