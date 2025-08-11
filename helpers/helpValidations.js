export const helpValidations = (form) => {
  let errors = {};

  let inputs = {
    name: form.name,
    email: form.email,
    password: form.password,
    confirmation: form.confirmation, 
  };

  let regex = {
    name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
    email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  };

  if (!inputs.name) {
    errors.name = "'Name' is a required field";
  } else if (inputs.name.length < 6) {
    errors.name = "'Name' must be at least 6 characters";
  } else if (!regex.name.test(inputs.name)) {
    errors.name = "'Name' only accepts letters and spaces";
  }

  if (!inputs.email) {
    errors.email = "'Email' is a required field";
  } else if (!regex.email.test(inputs.email)) {
    errors.email = "'Email' must contain a valid Email";
  }

  if (!inputs.password) {
    errors.password = "'Password' is a required field";
  } else if (!regex.password.test(inputs.password)) {
    errors.password = "Password must contain minimum eight characters, at least one letter and one number";
  }

  if (!inputs.confirmation) {
    errors.confirmation = "'Confirm Password' is a required field";
  } else if (!regex.password.test(inputs.confirmation) || inputs.password !== inputs.confirmation) {
    errors.confirmation =
      "Password and Confirmation does not match";
  }

  return errors;
};
