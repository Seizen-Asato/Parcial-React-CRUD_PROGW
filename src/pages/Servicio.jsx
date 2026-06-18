import "../components/layout/Servicio.css";
const Servicios = () => {
  return (
    <div className="servicios-container">
      <h2>Nuestros Servicios</h2>
      <hr />
      <div className="servicios-grid">
        <div className="servicio-card">
          <h3>Desarrollo Web</h3>
          <p>Aplicaciones modernas con React y C#.</p>
        </div>
        <div className="servicio-card">
          <h3>Diseño UI</h3>
          <p>Interfaces limpias y responsivas.</p>
        </div>
        <div className="servicio-card">
          <h3>Integración APIs</h3>
          <p>Conexión con datos externos y públicos.</p>
        </div>
        <div className="servicio-card">
          <h3>Soporte</h3>
          <p>Mantenimiento y mejoras continuas.</p>
        </div>
        <div className="servicio-card">
          <h3>Arquitectura</h3>
          <p>Buena arquitectura de software con escabalididad.</p>
        </div>
        <div className="servicio-card">
          <h3>Testing y Calidad</h3>
          <p>Pruebas automatizadas y manuales para asegurar calidad.</p>
        </div>
        <div className="servicio-card">
          <h3>Documentación</h3>
          <p>Guías claras para mantener y escalar proyectos.</p>
        </div>
        <div className="servicio-card">
          <h3>Trabajo en Equipo</h3>
          <p>Organización y colaboración para lograr objetivos comunes.</p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
