import "../blocks/feedbackModal.css";

// COMPONENTS
import Modal from "./Modal";

const FeedbackModal = ({ activeModal, onOpen, onClose, message, type }) => {
  return (
    <Modal
      modalName="feedback-modal"
      activeModal={activeModal}
      onOpen={onOpen}
      onClose={onClose}
      type={type}
    >
      <div className="feedback-modal">
        {type === "sign-up-success" && (
          <>
            <p className="feedback-modal__message">{message}</p>
            <button
              className="feedback-modal__button"
              type="button"
              onClick={() => onOpen("Sign in")}
            >
              Sign in
            </button>
          </>
        )}
        {type === "error" && (
          <p className="feedback-modal__message">{message}</p>
        )}
      </div>
    </Modal>
  );
};

export default FeedbackModal;
