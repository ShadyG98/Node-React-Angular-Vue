//Buscamos jsonplaceholder, para tener ejemplos de json hechos para practicar, procedemos a usar users

// Endpoints for external data
const { Router } = require('express');
const router = new Router(); //creamos un objeto llamado router

const fetch = require('node-fetch'); //Es un modulo para hacer peticiones a otros servicios externos

router.get('/', async (req, res) => { //Lo asincrono lleva tiempo para cargar los datos
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); //await, para que espere lo asincrono
    const data = await response.json(); // convertir a json la respuesta
    res.json(data); //actualizar la lista
});

module.exports = router; //exporta el modulo al principal