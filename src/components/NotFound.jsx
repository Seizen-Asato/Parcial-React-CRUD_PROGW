import { Link } from "react-router-dom";
import "../components/ui/noFound.css";

const NotFound = () => {
  return (
    <div className="noFound-container text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>

      <h2>Página no encontrada</h2>

      <p>La ruta que intentas visitar no existe.</p>

      <Link to="/" className="btn btn-primary mt-3">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
