import "../blocks/modal.css";

// LIBRARY IMPORTS
import { useEffect } from "react";

// ASSETS
import closeIcon from "../assets/close_btn_light.svg";

const Modal = ({
  modalName,
  activeModal,
  onClose,
  isClosable = true,
  type,
  onReset,
  children,
}) => {
  // I can handle both of the specific modal closing helpers (overlayClick, esc close)
  // here since this is where the DOM elements and listeners exist.

  // Set overlay click to close here since the modal overlay covers the whole screen.
  // Doesn't need cleanup in useEffect because React's onClick is basically an
  // eventListener that handles the DOM for us.
  const handleOverlayClick = (e) => {
    // e.target = what is actually clicked on | e.currentTarget = the element that has an eventListener attached. onClick handles the listener.
    if (e.target === e.currentTarget && isClosable) {
      onClose();
      // onReset only exists from Modals that have a form so I need to check if it
      // exists before I call it or I get a typeError that onReset is not a function.
      // Like when I close the FeedbackModal which also uses the Modal component.
      if (onReset) {
        onReset({ email: "", password: "", username: "" });
      }
    }
  };

  // Since the esc closer listens on the whole document I need clean up with useEffect.
  useEffect(() => {
    // Don't add a listener if there is no modal open.
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
        if (onReset) {
          onReset({ email: "", password: "", username: "" });
        }
      }
    };

    if (activeModal && isClosable) {
      document.addEventListener("keydown", handleEscClose);
    }

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal, onClose, isClosable]);

  return (
    <section
      className={
        activeModal ? `modal modal_type_${modalName} modal__opened` : "modal"
      }
      onClick={handleOverlayClick}
    >
      <div className={`modal__container modal__container_type_${modalName}`}>
        {isClosable && type !== "delete-article" && (
          <button
            className="modal__close-btn"
            onClick={() => {
              onClose();
              if (onReset) {
                onReset({ email: "", password: "", username: "" });
              }
            }}
          >
            <img
              src={closeIcon}
              alt="Close button."
              className="modal__close-icon"
            />
          </button>
        )}
        {children}
      </div>
    </section>
  );
};

export default Modal;
