"use client";

import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function SuccessCasesNavbar({
  cities,
  activeCity,
  setActiveCity,
}) {
  const [expanded, setExpanded] = useState(false);

  const handleSelect = (city) => {
    setActiveCity(city);
    setExpanded(false); // cierra el navbar al hacer clic
  };

  return (
    <Navbar expand="md" className="navbar" sticky="top" expanded={expanded}>
      <Container>
        <Navbar.Brand>
          <img
            src={activeCity.logo_white}
            alt={activeCity.name}
            height={60}
            style={{ objectFit: "contain" }}
            className={activeCity.id}
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="success-cases-navbar"
          onClick={() => setExpanded((prev) => !prev)}
        />
        <Navbar.Collapse id="success-cases-navbar">
          <Nav className="ms-auto">
            {cities.map((city) => (
              <Nav.Link
                key={city.id}
                onClick={() => handleSelect(city)}
                className={
                  city.id === activeCity.id
                    ? "fw-bold text-white"
                    : "text-white-50"
                }
              >
                {city.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
