import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;

//https://www.youtube.com/watch?v=oDQAzTJrbSI&t=555s enlace al video