import "../components/layout/Footer.css";
export default function Footer() {
  return (
    <div className="footer-container">
      <p className="text-footer">
        © {new Date().getFullYear()} Administrador de Posts — Todos los derechos
        reservados
      </p>
    </div>
  );
}
