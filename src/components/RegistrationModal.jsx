import "../blocks/modalWithForm.css";

// COMPONENTS
import ModalWithForm from "./ModalWithForm";

const RegistrationModal = ({ activeModal, onOpen, onClose }) => {
  return (
    <>
      <ModalWithForm
        title="Sign up"
        name="sign-up"
        submitText="Sign up"
        altText="Sign in"
        activeModal={activeModal}
        onOpen={onOpen}
        onClose={onClose}
      >
        <fieldset className="modal-form__inputs">
          <label htmlFor="registration-email" className="modal-form__label">
            Email
          </label>
          <input
            id="registration-emai"
            type="email"
            className="modal-form__input"
            placeholder="Enter email"
          />
          <label htmlFor="registration-password" className="modal-form__label">
            Password
          </label>
          <input
            id="registration-password"
            type="password"
            className="modal-form__input"
            placeholder="Enter password"
          />
          <label htmlFor="registration-username" className="modal-form__label">
            Username
          </label>
          <input
            id="registration-username"
            type="text"
            className="modal-form__input"
            placeholder="Enter your username"
          />
        </fieldset>
      </ModalWithForm>
    </>
  );
};

export default RegistrationModal;
