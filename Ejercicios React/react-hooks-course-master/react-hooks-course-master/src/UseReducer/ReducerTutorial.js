import React, { useReducer } from "react";
//state, para determinar que vamos a cambiar un estado, action, para demostrar que vamos a ejecutar varias acciones
const reducer = (state, action) => { //condicional para aplicar los cambios dependiendo de la eleccion del usuario
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true }); //dispatch sirve para cambiar lo que esté dentro del state
//Por lo que se procederá a cambiar 2 a la vez, count y showtext; es similar a UseState pero con la posibilida de cambiar varios atributos a la vez
  return (
    <div>
      <h1>{state.count}</h1> //cambia el estado del contador
      <button //2 botones para interactuar
        onClick={() => { //Dispatch les pasa la accion que le dimos a reducer como action
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a text</p>} cambia el texto dependiendo de lo ingresado
    </div>
  );
};

export default ReducerTutorial;
