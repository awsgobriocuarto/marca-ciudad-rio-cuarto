"use client";

import Image from "next/image";
import { useModal } from "@/context/ModalContext";

export default function FloatingButton() {
  const { setShow } = useModal();

  return (
    <div className="floating-button" onClick={() => setShow(true)}>
      <Image
        src="/images/floating-cta-button.svg"
        alt="Ingresá a la encuesta"
        width={100}
        height={75}
        priority
        className="floating-img d-none d-md-block"
      />
      <Image
        src="/images/floating-cta-button.svg"
        alt="Ingresá a la encuesta"
        width={100}
        height={75}
        priority
        className="floating-img d-md-none"
      />
    </div>
  );
}
