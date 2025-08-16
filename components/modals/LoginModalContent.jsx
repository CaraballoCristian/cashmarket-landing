"use client";
// Hooks
import { useState } from "react";
import { useValidations } from "@/hooks/useValidations";
// UI
import { User, Lock } from "lucide-react";
import Input from "../ui/input";
import FooterDisclaimer from "../ui/footerDisclaimer";
import Button from "../ui/button.jsx";
import CtaFeedback from "../ui/ctaFeedback";
// Context
import { useModal } from "@/context/ModalContext";
// i18n
import { useTranslations } from "next-intl";

const initialForm = {
  username: "",
  password: "",
};

export default function LoginContent() {
  const [form, setForm] = useState(initialForm);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  const t = useTranslations("modals.login");
  const v = useTranslations("validations");
  const validateForm = useValidations(v);

  // On Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validations to avoid forcing disabled buttons
    const fieldErrors = validateForm(form);
    setErrors(fieldErrors);

    // If any field is empty returns
    if (
      !form.username.trim() ||
      !form.password.trim() ||
      Object.keys(fieldErrors).length !== 0
    ) {
      setTimeout(() => setErrors({}), 1000);
      return;
    }
    
    // Simulate Login
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setForm(initialForm);
        setIsSubmitted(false);
        closeModal();
      }, 2000);
    }, 3000);
  };

  // On Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-2">
          {t("title")}
        </h2>
        {/* Underline */}
        <div className="w-12 h-1 rounded-full mx-auto bg-gradient-to-r from-accent-dark to-primary" />
      </div>

      {/* Form */}
      <form className="space-y-4 mb-6">
        {!isSubmitted ? (
          <>
            {/* Username Input */}
            <Input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder={t("placeholders.username")}
              icon={User}
              error={errors.username && errors.username}
            />

            {/* Password Input */}
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder={t("placeholders.password")}
              icon={Lock}
              error={errors.password && errors.password}
            />
          </>
        ) : (
          /* CTA Feedback */
          <CtaFeedback
            title={t("feedback.title")}
            subtitle={t("feedback.subtitle")}
          />
        )}

        {/* Login Button */}
        <Button
          variant="form"
          textValue={t("button")}
          disabledCondition={
            !form.username.trim() || !form.password.trim() || isLoading
          }
          isLoading={isLoading}
          loadingValue={t("loading")}
          handler={handleSubmit}
        />
      </form>

      {/* Footer Disclaimer */}
      <FooterDisclaimer msg={t("disclaimer")} />
    </div>
  );
}
