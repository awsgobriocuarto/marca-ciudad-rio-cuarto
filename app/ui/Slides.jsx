"use client";

import { Carousel } from "react-bootstrap";
import Image from "next/image";

export default function ImageCarousel() {
  const images = [
    { src: "/images/slides/01.webp", alt: "Imagen 1" },
    { src: "/images/slides/02.webp", alt: "Imagen 2" },
    { src: "/images/slides/03.webp", alt: "Imagen 3" },
  ];

  return (
    <Carousel fade interval={4000} id="slides" indicators={false}>
      {images.map((img, index) => (
        <Carousel.Item key={index}>
          <div className="position-relative slide-content">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: "cover" }}
              priority={index === 0}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
