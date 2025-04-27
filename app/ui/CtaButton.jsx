"use client";

import { Button } from "react-bootstrap";
import { useModal } from "@/context/ModalContext";

export default function CtaButton({ text = "Accedé a la Encuesta" }) {
  const { setShow } = useModal();

  return (
    <Button
      className="btn-gradient btn-lg cta-button"
      onClick={() => setShow(true)}
    >
      {text}
    </Button>
  );
}
