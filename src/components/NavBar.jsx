import { Link } from "react-router-dom";
import "./layout/navBar.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
const NavBar = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? "dark-mode" : "light-mode"}>
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
                <Link to="/EditPost" className="navbar-link">
                  Editar
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
