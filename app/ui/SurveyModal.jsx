"use client";

import { Modal } from "react-bootstrap";
import { useModal } from "@/context/ModalContext";

export default function SurveyModal() {
  const { show, setShow } = useModal();

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      centered
      size="xl"
      className="border-0"
    >
      <Modal.Header closeButton>
        <Modal.Title>City Brand Survey</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          src="https://form.typeform.com/to/WQJ000ya"
          width="100%"
          height="600"
          style={{ border: "none", borderRadius: "12px" }}
          allow="fullscreen"
          title="City Brand Survey"
        ></iframe>
      </Modal.Body>
    </Modal>
  );
}
