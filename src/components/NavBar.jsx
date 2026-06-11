import { Link } from "react-router-dom";
import "./layout/navBar.css";
const NavBar = ({ children }) => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Mi Logo</div>
        <div className="navbar-menu">
          <ul>
            <li className="navbar-item">
              <Link to="/" className="navbar-link">
                Inicio
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/prueba" className="navbar-link">Prueba</Link>
            </li>
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
};

export default NavBar;
