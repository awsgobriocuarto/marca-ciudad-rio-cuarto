import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-2">
            <img
              src="./images/logo-gobierno.svg"
              alt="recurso"
              className="logo"
            />
          </div>
          <div className="col-md-4">
            <p className="lead">
              Un proyecto para capturar la esencia <br /> de Río Cuarto y
              proyectar su futuro.
            </p>
          </div>
          <div className="col-md-3">
            <p>
              Todos los derechos reservados <br />© 2025 Gobierno de Río Cuarto.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
