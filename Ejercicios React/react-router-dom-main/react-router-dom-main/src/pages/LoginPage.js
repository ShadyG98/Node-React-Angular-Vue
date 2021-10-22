import { useHistory, useLocation } from 'react-router-dom';
import useAuth from "../auth/useAuth";

export default function LoginPage() {
    const history = useHistory();
    const location = useLocation(); //esto es para redireccionar luego
    const previusObjectURL = location.state?.from; //retorna la ultima ruta visitada, con un condicional por si es nulo que lo redireccione

    const auth = useAuth(); //se encarga de autenticar el usuario
    const handleLogin = () => {
        auth.login();
        history.push(previusObjectURL || "/dashboard") //los datos que necesita para leer una URL
    }

    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick={handleLogin}>
                Signin
            </button>            
        </div>
    )
}
