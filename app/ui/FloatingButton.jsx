"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

export default function FloatingButton() {
  const { setShow } = useModal();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="floating-button" onClick={() => setShow(true)}>
      <Image
        src="/images/floating-cta-button.svg"
        alt="Ingresá a la encuesta"
        width={100}
        height={75}
        priority
        className="floating-img"
      />
    </div>
  );
}
