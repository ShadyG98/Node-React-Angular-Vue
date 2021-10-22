import React, { forwardRef, useImperativeHandle, useState } from "react";
//forwardRef permite pasar una referencia a otro componente funcional, en este caso a imperativeHandle.js
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({ //lo necesitamos para referenciar de otro componente
    alterToggle() { //Es el nombre del botton que usamos en imperativeHandle, pero da error si usamos arriba useImperativeHandle
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button>Button From Child</button>
      {toggle && <span>Toggle</span>} //Con toggle alterna de utton From Child a utton From Parent
    </>
  );
});

export default Button;

