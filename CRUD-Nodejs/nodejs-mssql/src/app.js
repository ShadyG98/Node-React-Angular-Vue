import express from 'express';
import config from './config';

import productsRoutes from './routes/products.routes';

const app = express();

//let port = 6000; le colocamos el puerto que deseemos
//settings
//app.set('port', port || 3000) //Si existe la variable port, entonces en ese caso usa el 3000
app.set("port", config.port); //Ahora va a usar el puerto declarado en config

//middlewares para enviar y recibir con GET y POST
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(productsRoutes);

export default app;