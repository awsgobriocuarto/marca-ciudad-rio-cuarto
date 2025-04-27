"use client";

export default function HeroSection() {
  const handleClick = () => {
    requestAnimationFrame(() => {
      const targetElement = document.getElementById("slides");
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <p className="text-top">
                MARCA CIUDAD <span>RÍO CUARTO</span>
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="display-1">
                Construyamos juntos nuestra <span>Marca Ciudad.</span>
              </h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-10 col-md-4">
              <p className="lead mb-5">
                Completá la encuesta y sé protagonista de la construcción de
                nuestra Marca Ciudad.
              </p>
              <button onClick={handleClick} className="btn btn-link">
                <i className="fa-solid fa-arrow-down fa-xl text-primary"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
