import {
  Link,
  NavLink,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from "react-router-dom"; //importamos lo necesitado
import CategoriesPage from "../pages/CategoriesPage";
import PrivateRoute from "./PrivateRoute";

export default function CategoriesRouter() {
  const { url } = useRouteMatch();

  return (
    <div>
      <ul>
        <li>
          <NavLink exact to={`${url}`} activeClassName="active">
            All
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/terror`} activeClassName="active">
            Terror
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/action`} activeClassName="active">
            Action
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/anime`} activeClassName="active">
            Anime
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/categories" component={CategoriesPage} /> // el exact hace match consigo mismo, una forma facil de entenderlo, es unica, no puede extraer otras similares
        <PrivateRoute path="/categories/terror" component={TerrorRouter} />// sin el exact para acceder al componente

        <Route exact path="/categories/action"> //en categories si es necesario colocar exact
          <h1>Category Action</h1>
        </Route>
        <Route exact path="/categories/anime"> //no hay problema con el exact, no es contenido fuerte como el terror
          <h1>Category Anime</h1>
        </Route>

        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </div>
  );
}
//categoria aparte pero sin acceso de forma publica
function TerrorRouter() {
  const { url } = useRouteMatch(); //ayuda a hacer match sobre las sb categorias

  return (
    <div>
      <ul>
        <li>
          <Link to="/categories/terror">All</Link>
        </li>
        <li>
          <Link to="/categories/terror/gore">Gore</Link>
        </li>
        <li>
          <Link to="/categories/terror/suspense">Suspense</Link>
        </li>
      </ul>
      <Switch> //crear las plantillas de direccion
        <Route exact path={`${url}`}>
          <h3>Category Terror</h3>
        </Route>
        <Route exact path={`${url}/gore`}>
          <h3>Gore</h3>
        </Route>
        <Route exact path={`${url}/suspense`}>
          <h3>Suspense</h3>
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </div>
  );
}
