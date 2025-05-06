import Image from "next/image";

export default function CityInfo({ city }) {
  return (
    <div className="success-cases-city">
      <div className="row">
        <div className="col-md-6">
          <img
            src={city.image}
            alt={city.name}
            className="success-cases-city_image"
          />
        </div>
        <div className="col-md-6">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="success-cases-city_content">
                  <p className="success-cases-city_antetitle">Casos de éxito</p>
                  <h3 className="success-cases-city_title display-1">
                    Marca Ciudad <br />
                    <span>{city.name}</span>
                  </h3>
                  <p className="success-cases-city_description">
                    {city.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
