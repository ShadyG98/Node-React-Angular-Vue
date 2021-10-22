import {config} from 'dotenv'; //Va a intentar leer las variables de entorno definidas
config();

console.log (process.env.NICKNAME) //Para definirlo creamos el .env

//con las configuraciones realizadas en .env; podemos definir que user el PORT, si no el 3000
export default {
    port:process.env.PORT || 3000,
};