import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react"; //importamos las librerias

const domain = process.env.REACT_APP_AUTH0_DOMAIN; //El dominio y el ID se importan de Auth0
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider //Guarda todo en la applicacion de Auth0
      domain={domain} //Se crearon las variables por cada uno para no pegar el nombre ocmpleto
      clientId={clientId}
      redirectUri={window.location.origin} //a donde redirecciona, hacia donde estaba originalmente 
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
