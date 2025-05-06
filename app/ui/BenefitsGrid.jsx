import React from "react";

export default function BenefitsGrid() {
  const benefits = [
    {
      title:
        "Fortalece la <br className='d-none d-md-block' /> identidad local.",
      text: "Fomenta un sentido de pertenencia entre los ciudadanos y destaca aquello que los une y representa.",
    },
    {
      title: "Atraer <br className='d-none d-md-block' /> oportunidades.",
      text: "Posiciona a la ciudad como un destino atractivo para turistas, inversores y talentos, destacando su singularidad frente a otras ciudades.",
    },
    {
      title: "Unificar la <br className='d-none d-md-block' /> comunicación.",
      text: "Proporciona un marco consistente para comunicar mensajes en ámbitos tan diversos como el turismo, la inversión y la cultura.",
    },
    {
      title:
        "Impulsa el desarrollo <br className='d-none d-md-block' /> económico y social.",
      text: "Una marca fuerte puede actuar como catalizador para nuevas iniciativas y alianzas estratégicas.",
    },
  ];
  return (
    <section className="benefits">
      <div className="benefits-list">
        <div className="container">
          <hr />
          <div className="row">
            <div className="col-12">
              <h2>
                ¿Para qué sirve <br className="d-md-none" /> una marca ciudad?
              </h2>
            </div>
            {benefits.map((benetif) => (
              <div key={benetif.title} className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <h3
                      className="card-title"
                      dangerouslySetInnerHTML={{ __html: benetif.title }}
                    />
                    <p className="card-text">{benetif.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr />
        </div>
      </div>
      <div className="benefits-text">
        <div className="container">
          <h2 className="">
            Río Cuarto necesita una <b>Marca Ciudad</b> para destacar su
            identidad, proyectar su valor cultural y humano, y posicionarse como
            una ciudad moderna en crecimiento. Es un esfuerzo colectivo para
            mostrar al mundo su singularidad, historia y visión compartida.
          </h2>
        </div>
      </div>
    </section>
  );
}
