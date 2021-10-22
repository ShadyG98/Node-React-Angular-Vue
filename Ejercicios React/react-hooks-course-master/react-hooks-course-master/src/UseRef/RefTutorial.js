import React, { useRef } from "react";

function RefTutorial() {
  const inputRef = useRef(null);
//useRef es la forma mas eficiente de interactuar con el dom de HTML, donde nos enfocamos en un solo elemento a la hora de modificarlo
  const onClick = () => {
    inputRef.current.value = ""; //se referencia al input y automaticamente se limpiara el campo de datos
  };
  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} /> //esta referenciado a inputref y cada cambio de inputref sera referenciado al input
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;

//Tambien existe inputRef.current.focus(), que automaticamente lo hace centrar en el input por ejemplo por cada vez que pulse el boton