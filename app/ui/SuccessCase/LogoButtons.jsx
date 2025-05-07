export default function LogoButtons({ cities, activeCity, setActiveCity }) {
  return (
    <div className="success-cases-logos">
      {cities.map((city) => (
        <button
          key={city.id}
          className={`btn btn-link logo-btn ${
            city.id === activeCity.id ? "active" : ""
          }`}
          onClick={() => setActiveCity(city)}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}
