import Image from "next/image";

export default function LogoButtons({ cities, setActiveCity }) {
  return (
    <div className="success-cases-logos">
      <div className="">
        {cities.map((city) => (
          <button
            key={city.id}
            className="btn btn-link"
            onClick={() => setActiveCity(city)}
          >
            {/* <Image src={city.logo} alt={city.name} width={100} height={60} /> */}
            <img
              src={city.logo}
              alt={city.name}
              height={65}
              className={`${city.id}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
