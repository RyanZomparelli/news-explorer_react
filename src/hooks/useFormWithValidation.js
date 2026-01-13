import { useCallback, useState } from "react";

// Hook for controlling and validating a form. Basic usage is the
// same as described above. For the validation:
//
// - create HTML elements in the form component to display the
//   error messages. The error messages will be stored as
//   `errors.nameOfInput`, where`nameOfInput` is the value of
//   the input's `name` attribute.
//
// - isValid is used to determine whether the button should be
//   enabled or disabled.
//
// - resetForm should be called after successful submission.

const useFormWithValidation = (defaultValues) => {
  // values, is the object you create like {email: "", password: "", etc...}.
  const [values, setValues] = useState(defaultValues);
  // errors are the feedback given from the browsers built in validation stored in target.validationMessage.
  const [errors, setErrors] = useState({});
  // The result of the browsers built in validation on the whole form.
  const [isValid, setIsValid] = useState(false);

  // Dynamic form control.
  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    // Update the controlled input values dynamically as the user types.
    setValues({ ...values, [name]: value });
    // Using a method (checkValidity()) and property (validationMessage) of the
    // browser's DOM API to get validation errors and the the state of the forms validity.
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const getErrorMsg = (field, message) => {
    return errors[field] ? message : "";
  };

  // resetForm is as simple as passing the original values to the setter functions.
  // The problem is, without useCallback(), everytime the component rerenders, a
  // new instance of the resetForm() function is created unnecessarily. useCallback
  // keeps it as a refrence instead of creating a new one. The newValues etc.. parameters
  // are just for the flexibility to add any values to the reset.
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    []
  );

  return { values, errors, handleChange, isValid, getErrorMsg, resetForm };
};

export default useFormWithValidation;
