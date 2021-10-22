const express = require('express');
const morgan = require('morgan');
const app = express();

// settings
app.set('port', process.env.PORT || 4000); //process.env.PORT para que lo lean maquinas virtuales

// middlewares
app.use(morgan('dev')); //nombre del puerto
app.use(express.urlencoded({extended: false}));
app.use(express.json()); //devuelve archivos json, como javascript, entre otros comandos

// routes
app.use(require('./routes')); //lo importamos desde el otro index,js dentro de la carpeta routes que creamos
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users')); //Ruta de ussers

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});


//Api, comunicacion entre los puertos de la base de datos con un camino diferente par devolver solo lo que necesitemos
//Rest, que pueda utilizarse en distintos dispositivos o aplicaciones para extraer informacion de esas rutas

//En package.json tenemos 
//"dev": "nodemon src", ese archivo original de test fue reemplazado para que lea solamente dev
//entonces llamamos a la consola simplemente con npm run dev
//Nodemon ayuda a permitir que pueda ejecutarse el puerto con mas facilidad sin tener que frenar la consola
//Morgan es un middleware, como una libreria que ayuda a mejorar los procesos
//Postman, hace una simulacion de las aplicaciones o apps por HTTP para que las consultas funcionen correctamente