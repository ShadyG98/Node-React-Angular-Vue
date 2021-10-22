import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function ContextTutorial() {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
  );
}

export default ContextTutorial;

//En una aplicación típica de React, los datos se pasan de arriba hacia abajo (de padre a hijo) 
//a través de props, pero esta forma puede resultar incómoda para ciertos tipos de props 
//(por ejemplo, localización, el tema de la interfaz) que son necesarias para muchos componentes 
//dentro de una aplicación. Context proporciona una forma de compartir valores como estos entre componentes 
//sin tener que pasar explícitamente una prop a través de cada nivel del árbol.

//Documentacion: https://es.reactjs.org/docs/context.html