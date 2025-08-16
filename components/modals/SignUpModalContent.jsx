"use client";
// Hooks
import { useState } from "react";
import { useValidations } from "@/hooks/useValidations";
// Context
import { useModal } from "@/context/ModalContext";
// UI
import { User, Mail, Lock, CheckCircle } from "lucide-react";
import Input from "../ui/input";
import FooterDisclaimer from "../ui/footerDisclaimer";
import Button from "../ui/button";
import CtaFeedback from "../ui/ctaFeedback";
// i18n
import { useTranslations } from "next-intl";

const initialForm = {
  name: "",
  email: "",
  password: "",
  confirmation: "",
};

export default function SignUpContent() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { closeModal } = useModal();
  const t = useTranslations("modals.signup");
  const v = useTranslations("validations");
  const validateForm = useValidations(v);

  // On Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // On Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validations to avoid forcing disabled buttons
    const fieldErrors = validateForm(form);
    setErrors(fieldErrors);

    // Is any fiels is empty, returns
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.password.trim() ||
      !form.confirmation.trim() ||
      Object.keys(fieldErrors).length !== 0
    ) {
      setTimeout(() => setErrors({}), 1000);
      return;
    }
    // Simulate Sign Up
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

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-2">
          {t("title")}
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full mx-auto"></div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        {!isSubmitted ? (
          <>
            {/* Name Input */}
            <Input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("placeholders.name")}
              icon={User}
              error={errors.name && errors.name}
            />

            {/* Email Input */}
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("placeholders.email")}
              icon={Mail}
              error={errors.email && errors.email}
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

            {/* Confirm Password Input */}
            <Input
              type="password"
              name="confirmation"
              value={form.confirmation}
              onChange={handleChange}
              placeholder={t("placeholders.confirmation")}
              icon={CheckCircle}
              error={errors.confirmation && errors.confirmation}
            />
          </>
        ) : (
          /* CTA Feedback */
          <CtaFeedback
            title={t("feedback.title")}
            subtitle={t("feedback.subtitle")}
          />
        )}
        {/* Sign Up Button */}
        <Button
          variant="form"
          textValue={t("button")}
          disabledCondition={
            !form.name ||
            !form.email ||
            !form.password ||
            !form.confirmation ||
            isLoading
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
