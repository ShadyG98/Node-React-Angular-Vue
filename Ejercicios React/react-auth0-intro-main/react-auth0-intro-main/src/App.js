import "./App.css";
import LoginButton from "./components/LoginButton"; //importamos de component
import LogoutButton from "./components/LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react"; //importamos la clase para usar las funciones

function App() {
  const { isAuthenticated, isLoading } = useAuth0(); //Para usar Aut0

  if (isLoading) {
    return <h1>Is Loading</h1>
  }

  return (
    <div className="App">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />} //Propiedad por defecto de React, si esta autenticado, mostrar el boton logout, si no, mostrar el boton login
      <Profile />
    </div>
  );
}

export default App;
 
//https://youtu.be/DRbXvN10_XA , video de ayuda