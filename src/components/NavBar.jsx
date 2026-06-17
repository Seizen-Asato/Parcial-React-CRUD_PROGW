import { Link } from "react-router-dom";
import "./layout/navBar.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Logo from "../assets/logo.webp";
const NavBar = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? "dark-mode" : "light-mode"}>
      <div className="navbar">
        <div className="navbar-container  ">
          <div className="navbar-left">
            <Link to="/">
              <img src={Logo} alt="Pen Logo" className="navbar-logo" />
            </Link>
          </div>
          <div className="navbar-menu">
            <ul>
              <li className="navbar-item">
                <Link to="/" className="navbar-link">
                  Inicio
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/Loading" className="navbar-link">
                  Editar
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/" className="navbar-link">
                  Contacto
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/" className="navbar-link">
                  Servicios
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/" className="navbar-link">
                  Acerca de
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default NavBar;
