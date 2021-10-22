import { useParams } from 'react-router-dom' //Hook que nos ayudará a conservar los parámetros

export default function ProfilePage() {
    const { username } = useParams(); //Devuelve un objeto que tenga distintos parametros de la URL
    return (
        <div>
            <h1>ProfilePage: {username}</h1>            
        </div>
    )
}
