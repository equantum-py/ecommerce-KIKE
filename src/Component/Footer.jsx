import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="antojo-footer">
        <div className="container">
          <div className="antojo-footer-grid">
            {/* Bloque 1 - Marca */}
            <div className="antojo-footer-brand">
              <Link to="/">
                <img src="/images/antojo-casero-logo-oficial.png" alt="Antojo Casero" loading="lazy" decoding="async" className="antojo-logo-footer" />
              </Link>
              <p>Sabores caseros preparados con dedicación.</p>
            </div>

            {/* Bloque 2 - Navegación */}
            <div className="antojo-footer-links">
              <h3>Navegación</h3>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Shop">Productos</Link></li>
                <li><Link to="/Shop">Categorías</Link></li>
                <li><Link to="/About">Nosotros</Link></li>
                <li><Link to="/Contact">Contacto</Link></li>
              </ul>
            </div>

            {/* Bloque 3 - Información */}
            <div className="antojo-footer-info">
              <h3>Categorías</h3>
              <ul>
                <li>Dulce</li>
                <li>Salado</li>
                <li>Bebidas</li>
                <li>Postres</li>
                <li>Saludable</li>
              </ul>
              <p className="mt-4">Datos de contacto próximamente</p>
            </div>
          </div>
        </div>

        <div className="antojo-footer-bottom">
          © 2026 Antojo Casero. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
};

export default Footer;
