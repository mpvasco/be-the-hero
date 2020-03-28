const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

    routes.post('/sessions',SessionController.create);

    routes.get('/ongs', OngController.index)
    routes.post('/ongs', OngController.create);

    routes.get('/profile', ProfileController.index);

    routes.get('/incidents', IncidentController.index);
    routes.post('/incidents', IncidentController.create);
    routes.delete('/incidents/:id', IncidentController.delete);
module.exports = routes;






















//desacoplou o modulo de rotas em uma nova variável

/*routes.get('/ongs',async(request, response) => {
    const ongs= await connection('ongs').select('*');

    return response.json(ongs);
});

routes.post('/ongs',async(request, response) => {
    
    const {name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');


await connection('ongs').insert({
id,
name,
email,
whatsapp,
city,
uf,
})   
    
    return response.json({id}); */