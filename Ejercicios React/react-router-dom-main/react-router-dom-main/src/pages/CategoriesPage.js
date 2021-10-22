import { useLocation, useHistory } from 'react-router-dom' //Atributos de una URL, useHistory, libreria para mas funciones como history.push


export default function CategoriesPage() {
    const location = useLocation(); //Atributos de ubicacion de una URL
    const history = useHistory();
    
    const query = new URLSearchParams(location.search) //Devuelve un objeto que busca parametros de la busqueda del evento realizado
    const skip = parseInt(query.get("skip")) || 0  //Skip es la posicion de la que va a devolver ciertos elementos
    const limit = parseInt(query.get("limit")) || 15 //Limit es justamente el limite de parametros que va a devolver
    //Es neecsario colocar valores por defectos por si el usuario no ingresa nada. de ahi 0 y 15

    const handleNext = () => {
        query.set("skip", skip + limit) //Actualizar el query, cual atributo "skip", y los  dos parametros, skip + limit
        // query.set("limit", 200)
        //skip + limit, muestra la suma de ambos parametros, y traera lotes de 15 categorias del sitio por ejemplo

        history.push({search: query.toString() }) //sirve para ver los parametros necesarios y los convierte en cadena, del URL interno
    }

    return (
        <div>
            <h1>CategoriesPage</h1>
            <h2>Skip: {skip}</h2>
            <h2>Limit: {limit}</h2>

            <button onClick={handleNext}> //
                Next
            </button>
        </div>
    )
}
