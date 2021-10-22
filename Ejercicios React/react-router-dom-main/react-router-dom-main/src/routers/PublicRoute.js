import { Route, Redirect } from "react-router-dom";
import useAuth from "../auth/useAuth";
//Es necesario por que si el usuario esta logeado, ingresa a register and login, y no deberia ser asi
export default function PublicRoute({ component: Component, ...rest }) {
  const auth = useAuth();

  return (
    <Route {...rest}>
      {!auth.isLogged() ? (
        <Component />
      ) : (
        <Redirect to="/dashboard" />
      )}
    </Route>
  );
} //cambiamos la condicion para que el usuario no acceda si no esta logeado