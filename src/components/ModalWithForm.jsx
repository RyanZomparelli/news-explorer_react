import "../blocks/modalWithForm.css";

// COMPONENTS
import Modal from "./Modal";

const ModalWithForm = ({
  activeModal,
  onOpen,
  onClose,
  title,
  name,
  submitText,
  altText,
  onSubmit,
  children,
}) => {
  return (
    <Modal
      modalName="modal-with-form"
      activeModal={activeModal}
      onClose={onClose}
    >
      <form className="modal-form" name={name} onSubmit={onSubmit}>
        <h4 className="modal-form__title">{title}</h4>
        {children}
        <button className="modal-form__submit-btn" type="submit">
          {submitText}
        </button>
        <button
          className="modal-form__alt-btn"
          type="button"
          onClick={() => onOpen(altText)}
        >
          or <span className="modal-form__alt-text">{altText}</span>
        </button>
      </form>
    </Modal>
  );
};

export default ModalWithForm;
