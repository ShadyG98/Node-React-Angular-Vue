import app from './app'
// Codigo de prueba -->  import './database/connection'

//app.listen(3000)
app.listen(app.get('port')) //Usa el port que definimos en app

//console.log('server on port', 3000)
console.log('server on port', app.get('port'))