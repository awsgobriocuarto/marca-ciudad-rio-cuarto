import React from "react";

export default function BrandExplanation() {
  return (
    <section className="brand-explanation" id="brand">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>
              ¿Qué es <br className="d-none d-md-block" /> una{" "}
              <br className="d-md-none" /> marca{" "}
              <br className="d-none d-md-block" /> ciudad?
            </h2>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <p className="lead">
              Es la identidad estratégica y emocional que define lo que una
              ciudad representa para sus habitantes y cómo desea ser vista en el
              mundo.
            </p>
            <p className="lead opacity-75">
              Va más allá de un logo o un eslogan; es una narrativa que integra
              su historia, valores, aspiraciones y espíritu, conectando lo
              tangible con lo intangible para proyectar confianza, orgullo y
              visión de futuro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
