"use client";

import { useState } from "react";
import CityInfo from "./CityInfo";
import LogoButtons from "./LogoButtons";
import GallerySlider from "./GallerySlider";
import { cities } from "@/lib/data";
import Demo from "../Demo";
import SuccessCasesNavbar from "./SuccessCasesNavbar";

export default function SuccessCases() {
  const [activeCity, setActiveCity] = useState(cities[0]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleCityChange = (city) => {
    setActiveCity(city);
    setActiveSlideIndex(0);
  };

  return (
    <section className="success-cases">
      <SuccessCasesNavbar
        cities={cities}
        activeCity={activeCity}
        setActiveCity={handleCityChange}
      />
      <CityInfo city={activeCity} />
      <GallerySlider
        images={activeCity.gallery}
        activeIndex={activeSlideIndex}
        onSelect={(index) => setActiveSlideIndex(index)}
      />
    </section>
  );
}
