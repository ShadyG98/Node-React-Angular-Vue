const { Router } = require('express'); //Router permite definir nuevas rutas para nuestro servidor

const router = new Router(); //y lo guardamos en un objeto para crear nuevas rutas

//aca importariamos la base de datos pero al ser complejo, vamos a usar otro metodo

router.get('/test', (req, res) => {
    const data = {
        name: 'Fazt',
        website: 'faztweb.com'
    };
    res.json(data);
});  

module.exports = router;

//https://youtu.be/bK3AJfs7qNY
//Video explicativo