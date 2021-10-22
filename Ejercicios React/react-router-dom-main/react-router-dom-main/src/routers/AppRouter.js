import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import PaymentsPage from "../pages/PaymentsPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import CategoriesRouter from "./CategoriesRouter";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch> //Switch permite cambiar las rutas para redireccionarlas
        <Route exact path="/about" component={AboutPage} /> // Route separa las paginas "/"
        <Route exact path="/contact" component={ContactPage} /> //Exact, permite que no se mezclen y lance varios resultados a la vez
        <Route exact path="/" component={HomePage} /> //Si tuvieramos el home al principio, cargaria esa dejando de lado las demas, por eso usamos Exact

        <Route exact path="/profile/:username" component={ProfilePage} /> // los : indican que es una variable, si no, habria que crear una ruta por cada usuario y seria imposible

        <Route path="/categories" component={CategoriesRouter} />

        <Route exact path="/signin">
          <Redirect to="/login" />
        </Route>

        <PublicRoute exact path="/login" component={LoginPage} />
        <PublicRoute exact path="/register" component={RegisterPage} />

        <PrivateRoute exact path="/dashboard" component={DashboardPage} /> //Ruta privada

        <PrivateRoute exact path="/payments" component={PaymentsPage} />

        <Route path="/404" component={NotFoundPage} />
        <Route path="*"> //acceso a todas las rutas
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
}


