import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function LoginPage() {
    const history = useHistory();
    const location = useLocation();
    const redirectTo = location.state?.from?.pathname || "/dashboard";
    const auth = useAuth();

    const handleLogin = () => {
        auth.login();
        history.push(redirectTo);
    };

    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick={handleLogin}>Signin</button>
        </div>
    );
}