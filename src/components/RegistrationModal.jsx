import "../blocks/modalWithForm.css";

// COMPONENTS
import ModalWithForm from "./ModalWithForm";

// CUSTOM HOOKS
import useFormWithValidation from "../hooks/useFormWithValidation";

const RegistrationModal = ({ activeModal, onOpen, onClose }) => {
  const { values, errors, isValid, handleChange, getErrorMsg, resetForm } =
    useFormWithValidation({
      email: "",
      password: "",
      username: "",
    });

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
        isValid={isValid}
        resetForm={resetForm}
      >
        <fieldset className="modal-form__inputs">
          <label htmlFor="registration-email" className="modal-form__label">
            Email
          </label>
          <input
            id="registration-emai"
            type="email"
            name="email"
            value={values.email}
            className="modal-form__input"
            placeholder="Enter email"
            required
            onChange={handleChange}
          />
          <span className="modal-form__error modal-form__error_email">
            {getErrorMsg("email", "Please enter a valid email")}
          </span>
          <label htmlFor="registration-password" className="modal-form__label">
            Password
          </label>
          <input
            id="registration-password"
            type="password"
            name="password"
            value={values.password}
            className="modal-form__input"
            placeholder="Enter password"
            required
            onChange={handleChange}
          />
          <span className="modal-form__error modal-form__error_password">
            {errors.password}
          </span>
          <label htmlFor="registration-username" className="modal-form__label">
            Username
          </label>
          <input
            id="registration-username"
            type="text"
            name="username"
            value={values.username}
            className="modal-form__input"
            placeholder="Enter your username"
            required
            onChange={handleChange}
          />
          <span className="modal-form__error modal-form__error_username">
            {errors.username}
          </span>
        </fieldset>
      </ModalWithForm>
    </>
  );
};

export default RegistrationModal;
