import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0(); //al igngresar, redireccionamos a Aut0 con sus componentes y atributos
  return (
    <div>
      <button onClick={() => loginWithRedirect()}>login</button>
    </div>
  );
};

export default LoginButton;
