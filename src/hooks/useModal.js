import { useState } from "react";

// Handles basic open and closing logic for all modals, and state for all general modals that don't have a form.
const useModal = () => {
  const [activeModal, setActiveModal] = useState("");
  // Custom messages depending on the type.
  const [message, setMessage] = useState("");
  // For the FeedbackModal like, 'success', 'error', 'warning', 'loading'.
  const [type, setType] = useState("");

  // message and type are optional.
  const openModal = (modal, message = "", type = "") => {
    setActiveModal(modal);
    setMessage(message);
    setType(type);
  };

  const closeModal = () => {
    setActiveModal("");
    setMessage("");
    setType("");
  };

  return { activeModal, openModal, closeModal, message, type };
};

export default useModal;
