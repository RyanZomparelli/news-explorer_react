import { useState } from "react";

// Handles basic open and closing logic for all modals, and state for all general modals that don't have a form.
const useModal = () => {
  const [activeModal, setActiveModal] = useState("");
  const [modalOptions, setModalOptions] = useState({
    message: "", // For the FeedbackModal.
    type: "", // For the FeedbackModal like: 'success', 'error', etc...
    articleToDelete: null, // Unliking an article from a NewsCard.
    registrationEmailError: null, // Passing server errors to the RegistrationModal.
  });

  // The parameters were getting out of hand so dot helped me brainstorm on an options object instead.
  const openModal = (modal, options = {}) => {
    setActiveModal(modal);
    setModalOptions({
      message: "",
      type: "",
      articleToDelete: null,
      registrationEmailError: null,
      ...options, // Set the new options to override the defaults. An optional options object.
    });
  };

  const closeModal = () => {
    setActiveModal("");
    setModalOptions({
      message: "",
      type: "",
      articleToDelete: null,
      registrationEmailError: null,
    });
  };

  // When you pass a callback to a setter function react gives you the current value
  // of the corresponding state variable. Here we get the option defaults and overwrite
  // the registrationError. We can call this in our controlled input to remove the error message.
  const clearRegistrationError = () => {
    setModalOptions((prev) => ({ ...prev, registrationEmailError: null }));
  };

  return {
    activeModal,
    openModal,
    closeModal,
    ...modalOptions,
    clearRegistrationError,
  };
};

export default useModal;
