//importamos el modulo
import sql from "mssql";

//parametros para nuestra database
const dbsettings = {
    user: 'Brenda',
    password: 'Leviackerman_1',
    server: 'localhost',
    //server: 'DESKTOP-VKMNFDC\MSSQLSERVER01', este servidor no existe, es el IP
    database: 'webstore',
    // port: '3432', puedes especificar el puerto
    //Para evitar erorres con el certificado, vamos a la dependencia oficial y copiamos estas dos lineas
    options: {
        encrypt: true, //for azure
        trustServerCertificate: true, //change to true for local dev/ self-singed certs
    },
};
//el await es luego de conectarse, hacer una accion

//realiza una conexion a la database y devuelve una respuesta con una consulta simple SELECT 1
export async function getConnection(){
    try{
        const pool = await sql.connect(dbsettings);
        return pool;
    } catch(error){
        console.error(error);
    }
}

//Primera conexion
//const result = await pool.request().query("SELECT 1");
//console.log(result);

export {sql};