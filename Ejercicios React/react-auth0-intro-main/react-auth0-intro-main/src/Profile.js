import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css"; //Para darle un mini estilo

const Profile = () => {
  const { user, isAuthenticated } = useAuth0(); //isAuthenticated para asegurarse que esté autentificado
  console.log(user);
  // return <pre>{JSON.stringify(user, null, 2)}</pre>;
  return (
    isAuthenticated && (
      <div> //Aqui se muestra por defecto lo que realiza Aut0, mostrando la imagen y sus componentes
        <img src={user.picture} alt={user.name} /> 
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <JSONPretty data={user} />; //Modulo para ver mejor los datos
      </div>
    )
  );
};

export default Profile;
