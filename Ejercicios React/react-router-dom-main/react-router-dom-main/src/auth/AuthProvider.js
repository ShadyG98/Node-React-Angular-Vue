import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(); //importar la autenticacion

const AuthProvider = ({ children }) => { //hereda de los hijos, es necesario para heredar los atributos a otros componentes
  const [user, setUser] = useState( //para cambiar sin problema
    JSON.parse(localStorage.getItem("user")) || null //Null sin logearse aun
  );
//Usamos el useEffect que recibe una funcion que se refresca cada vez que el usuario cambie, y el storage sirve para que se guarden los cambios, si no, podrias ingresar otra vez al login a traves del /login y no deberia suceder eso, se pierden los datos
  useEffect(() => {
    try {
      localStorage.setItem("user", JSON.stringify(user)); //para mantener los datos al recargar, es necesario convertirlo a cadena tambien
    } catch (error) {
      localStorage.removeItem("user"); //en caso de que el usuario no esté autenticado
      console.log(error);
    }
  }, [user]);

  const contextValue = {
    user,
    login() {
      setUser({ id: 1, username: "luis50" }); //un ejemplo por defecto
    },
    logout() {
      setUser(null);
    },
    isLogged() {
      return !!user;
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider> //Context value, informacion que se le pasará a un objeto
  );
};

export default AuthProvider;
