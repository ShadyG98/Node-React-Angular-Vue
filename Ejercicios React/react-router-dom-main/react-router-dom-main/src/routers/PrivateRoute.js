import { Route, Redirect, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

// const user = null;
// const user = {id: 1, username: "luis50"}

export default function PrivateRoute({ component: Component, ...rest }) { //Component en mayuscula para extraer los datos neecsarios del componente llamado Component
  const auth = useAuth(); //para la autenticacion del usuario
  const location = useLocation(); //para redireccionar

  return (
    <Route {...rest}> //Extrae los parametros que necesitamos de props, el hook que permite heredar para atributos privados
      {auth.isLogged() ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login" , state: { from: location }}} /> //lo que necesitamos para redireccionar
      )}
      //Si existe el componente Component, muestralo, si no, redirige a /login ya que no está autenticado
    </Route>
  );
}

//Auth es la autenticacion