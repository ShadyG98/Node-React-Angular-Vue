import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  let onChange = (event) => { //Simplemente declaramos una variable que le de la orden de cambiar por cada cambio
    const newValue = event.target.value; //event.target.value, Es la manera en la que accede al valor del input 
    setInputValue(newValue); //Cambiamos el valor por el que ingresamos al campo y se reemplaza Pedro, por el valor que escribimos
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;

//Ejemplo de calculadora que suma por cada vez
//UseState permite cambiar el valor de HTML, sin tener que modificar o hacer grandes pasos
//No importa si es un numero, variable, etc
//Esta configurado para actualizarse por cada vez que el usuario ejecuta una accion y cambia el valor dependiendo de lo que le pidamos