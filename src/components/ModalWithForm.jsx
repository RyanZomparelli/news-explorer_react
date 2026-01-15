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
  handleSubmit,
  isValid,
  resetForm,
  children,
  registrationEmailError,
}) => {
  return (
    <Modal
      modalName="modal-with-form"
      activeModal={activeModal}
      onClose={onClose}
      onReset={resetForm}
    >
      <form
        className="modal-form"
        name={name}
        onSubmit={handleSubmit}
        noValidate
      >
        <h4 className="modal-form__title">{title}</h4>
        {children}
        <span className="modal-form__error modal-form__error_server">
          {registrationEmailError}
        </span>
        <button
          className={
            !isValid
              ? "modal-form__submit-btn_disabled"
              : "modal-form__submit-btn"
          }
          type="submit"
          disabled={!isValid}
        >
          {submitText}
        </button>
        <button
          className="modal-form__alt-btn"
          type="button"
          onClick={() => {
            resetForm({ email: "", password: "", username: "" });
            onClose();
            onOpen(altText);
          }}
        >
          or <span className="modal-form__alt-text">{altText}</span>
        </button>
      </form>
    </Modal>
  );
};

export default ModalWithForm;
