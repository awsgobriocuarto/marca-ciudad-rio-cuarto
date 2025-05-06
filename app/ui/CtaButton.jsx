"use client";

import { Button } from "react-bootstrap";
import { useModal } from "@/context/ModalContext";

export default function CtaButton({ text = "Accedé a la Encuesta" }) {
  const { setShow } = useModal();

  return (
    <Button className="btn-gradient cta-button" onClick={() => setShow(true)}>
      {text}
    </Button>
  );
}
