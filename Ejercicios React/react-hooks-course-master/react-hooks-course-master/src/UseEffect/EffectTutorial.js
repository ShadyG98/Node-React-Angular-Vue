import React, { useEffect, useState } from "react";
import axios from "axios";
//se instala npm axios, que nos va a ayudar a crear la api
function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
//UseEffect permitira que por cada vez que la pagina se renderice, muestre el contenido que esté dentro
  useEffect(() => {
    axios //devuelve una matriz con un objeto dentro
      .get("https://jsonplaceholder.typicode.com/comments") //su direccion de libreria
      .then((response) => { //entonces envia una res´puesta con los datos
        setData(response.data[0].email); //Para acceder al primer elemento del email
        console.log("API WAS CALLED");
      });
  }, []); //si colocamos count dentro de los corchetes, se vuelve a llamar nuevamente la api axios y renderiza nuevamente
//Por ejemplo, seria muy util, si tuvieramos que cargar imagenes de forma constante, por ejemplo en instagram, que renderice y mande mas resultados de imagenes y videos
  return (
    <div>
      Hello World
      <h1>{data}</h1> //Devuelve el dato y el contador
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1); //se cambia el contador y se hace la operacion count + 1
        }}
      >
        Click
      </button>
    </div>
  );
}

export default EffectTutorial;
