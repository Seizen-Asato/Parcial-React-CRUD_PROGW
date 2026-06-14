import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>

      <h2>Página no encontrada</h2>

      <p className="text-muted">La ruta que intentas visitar no existe.</p>

      <Link to="/" className="btn btn-primary mt-3">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
