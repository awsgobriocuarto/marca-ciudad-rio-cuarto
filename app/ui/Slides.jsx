"use client";

import { Carousel } from "react-bootstrap";
import Image from "next/image";
import { images } from "@/lib/data";

export default function ImageCarousel() {
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
