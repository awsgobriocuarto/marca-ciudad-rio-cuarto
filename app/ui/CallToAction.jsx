import React from "react";
import CtaButton from "./CtaButton";

export default function CallToAction() {
  return (
    <div className="cta">
      <section className="cta-white">
        <div className="container">
          <p className="cta-pretitle text-primary">
            Proyecto Marca Ciudad Río Cuarto
          </p>
          <h2 className="text-primary">Tu opinión es muuuuy importante.</h2>
          <div className="row mb-5">
            <div className="col-md-6 col-lg-5 col-xl-4">
              <p className="cta-text lead">
                La construcción de una marca ciudad auténtica y representativa
                comienza escuchando a las personas que la viven día a día.
              </p>
              <p className="cta-text lead">
                Tu percepción es fundamental para crear una marca que hable
                desde el corazón de nuestra ciudad.
              </p>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4">
              <p className="cta-text lead">
                Diseñamos un cuestionario para que puedas participar en el
                proceso de la creación de nuestra marca ciudad.
              </p>
              <CtaButton text="Accedé a la encuesta" />
            </div>
          </div>
          <div className="cta-info">
            <p>
              <img
                src="./images/iconos/recurso-1.svg"
                alt="recurso"
                className="cta-icon"
              />{" "}
              Anónimo
            </p>
            <p>
              <img
                src="./images/iconos/recurso-2.svg"
                alt="recurso"
                className="cta-icon"
              />{" "}
              Apto Todo Público
            </p>
            <p>
              <img
                src="./images/iconos/recurso-3.svg"
                alt="recurso"
                className="cta-icon"
              />{" "}
              Duración 2 a 5'
            </p>
            <p>
              <img
                src="./images/iconos/recurso-4.svg"
                alt="recurso"
                className="cta-icon"
              />{" "}
              Sin conocimientos previos
            </p>
          </div>
          <hr />
        </div>
      </section>
      <section className="cta-primary">
        <div className="container">
          <h2>
            La marca ciudad <br />
            <b>es nuestra identidad.</b>
          </h2>
          <h2 className="opacity-75 mb-5">
            Tu opinión nos acerca a crear una marca que inspire y represente a
            todos.
          </h2>
          <CtaButton text="Accedé ahora y participá" />
        </div>
      </section>
    </div>
  );
}
