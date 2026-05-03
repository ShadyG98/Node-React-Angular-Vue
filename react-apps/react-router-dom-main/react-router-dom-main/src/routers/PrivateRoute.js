import { Route, Redirect, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";


export default function PrivateRoute({ component: Component, ...rest }) { 
  const auth = useAuth(); 
  const location = useLocation(); 

  return (
    <Route {...rest}> //Extrae los parametros que necesitamos de props, el hook que permite heredar para atributos privados
      {auth.isLogged() ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login" , state: { from: location }}} /> 
      )}
    </Route>
  );
}

