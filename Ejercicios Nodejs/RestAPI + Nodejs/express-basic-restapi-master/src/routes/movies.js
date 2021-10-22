const { Router } = require('express');
const router = new Router();
const _ = require('underscore'); //Ésta biblioteca nos permite funciones adicionales (.each)

const movies = require('../sample.json');

router.get('/', (req, res) => {
    res.json(movies); //enviamos el contenido del json 
});

//Post para almacenar
router.post('/', (req, res) => {
    const id = movies.length + 1; //para aumentar el contador de cada objeto y crear 1 objeto por cada Post
    const { title, director, year, rating } = req.body; //Desde Postman enviamos el Post desde headers (direccion) y body(contenido) con raw, y al solicitar req.body, entonces obtenemos lo que mandamos a traves del servidor de Postman
    const newMovie = { ...req.body, id }; //A traves del ID entramos a un objeto unico, por lo que lo guardamos alli
    if (id && title && director && year && rating) {
        movies.push(newMovie); //añadimos las peliculas en un objeto nuevo
        res.json(movies); //finalmente actualizamos y mandamos al cliente servidor, la lista actualizada
    } else {
        res.status(500).json({error: 'There was an error.'}); //mandar archivos json ayuda a brindar mas datos del error
    }
});


//NPM install underscore (es una biblioteca que nos va a ayudar para eliminar)

router.delete('/:id', (req, res) => { //Desde Post hacemos la peticion de delete
    const {id} = req.params; //solicita todos los parametros
    if (id) {
        _.each(movies, (movie, i) => { //Por cada pelicula, pelicula e I que son ambas variables vacias (for)
            if (movie.id == id) { //si su pelicula e id es igual al id de la ruta
                movies.splice(i, 1); //eliminamos el indice que esta recorriendo y una sola pelicula
            }
        });
        res.json(movies); //Envia el arreglo actualizado
    }
});

//Actualizar
router.put('/:id', (req, res) => { //Actualizar datos de algun ID y reemplazar los datos de ese ID
    const { id } = req.params;
    const { title, director, year, rating } = req.body;
    if (id && title && director && year && rating) {
        _.each(movies, (movie, i) => {
            if (movie.id === id) { //Mismos pasos pero con la diferencia que debemos actualizar los pasos
                movie.title = title; //asi actualizamos cada dato
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies); //Actualizamos el listado completo
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

module.exports = router;