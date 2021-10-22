import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
  const inputRef = useRef(null);
//Muy similar a useEffect, pero hay ua gran diferencia, useLayoutEffect se llama muchisimo antes en consola, por lo que muestra antes
//seria muy util en UI, ya que puede mostrar un interfaz al usuario, hasta que useEffect extraiga los datos de la api
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO"; //Luego de la llamada a Pedro, rapidamente cambia a Hello, ya que useEffect demora un poco mas
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} /> //Pimero se llama a Pedro
    </div>
  );
}

export default LayoutEffectTutorial;
