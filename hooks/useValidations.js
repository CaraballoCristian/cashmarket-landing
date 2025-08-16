import { useMemo } from "react";

export const useValidations = (t) => {
  // Use memo to store values until language changes (efficiency)
  const rules = useMemo(
    () => ({
      name: {
        regex: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
        requiredMsg: t("name.required"),
        invalidMsg: t("name.invalid"),
        minLength: 6,
        minLengthMsg: t("name.minLength"),
      },
      email: {
        regex: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
        requiredMsg: t("email.required"),
        invalidMsg: t("email.invalid"),
      },
      password: {
        regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        requiredMsg: t("password.required"),
        invalidMsg: t("password.invalid"),
      },
      confirmation: {
        regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        requiredMsg: t("confirmation.required"),
        invalidMsg: t("confirmation.invalid"),
        matchField: "password",
      },
      username: {
        regex: /^[A-Za-z0-9_]{4,16}$/,
        requiredMsg: t("username.required"),
        invalidMsg: t("username.invalid"),
      },
    }),
    [t]
  );

  // Returns a function that validates
  // Use memo to store values until rules changes (efficiency)
  return useMemo(() => (form) => {
      let errors = {};

      // Only validates existing fieds 
      for (let field in form) {
        if (!rules[field]) continue; // ignores when theres no rule

        let value = String(form[field] || "").trim();
        let rule = rules[field];

        // Empty field
        if (!value) {
          errors[field] = rule.requiredMsg;
          continue;
        }

        // Min length validation (when needed)
        if (rule.minLength && value.length < rule.minLength) {
          errors[field] = rule.minLengthMsg;
          continue;
        }

        // Regex Validation
        if (rule.regex && !rule.regex.test(value)) {
          errors[field] = rule.invalidMsg;
          continue;
        }

        // Coincidence Validation (Password & confirmation)
        if (rule.matchField && value !== form[rule.matchField]) {
          errors[field] = rule.invalidMsg;
        }
      }

      return errors;
    },
    [rules]
  );
};
