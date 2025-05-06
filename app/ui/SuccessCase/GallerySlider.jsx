import { Carousel } from "react-bootstrap";

export default function GallerySlider({ images }) {
  return (
    <div className="success-cases-gallery">
      <Carousel fade interval={4000}>
        {images.map((src, index) => (
          <Carousel.Item key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="success-cases-gallery_image"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
