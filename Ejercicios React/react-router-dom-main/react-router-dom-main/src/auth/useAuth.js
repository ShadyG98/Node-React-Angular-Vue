import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

export default function useAuth() {
    return  useContext(AuthContext); //Consumimos el AuthContext, el contenido, y se asegurado de estar autenticado
}
