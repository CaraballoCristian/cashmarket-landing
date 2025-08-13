"use client";
// Hooks
import { useState } from "react";
// UI
import { User, Mail, Lock, CheckCircle } from "lucide-react";
// Utils
import { helpValidations } from "@/helpers/helpValidations";
import Input from "../ui/input";
import FooterDisclaimer from "../ui/footerDisclaimer";
import Button from "../ui/button";
import CtaFeedback from "../ui/ctaFeedback";

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

  // On blur
  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Sets form values
    const updatedForm = { ...form, [name]: value };

    // Validate all inputs
    const fieldErrors = helpValidations(form);

    // Set state for every key that contains an error
    if (fieldErrors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: fieldErrors[name],
      }));
      // if error doesnt exist, clean the error related to that key
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

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
    setIsLoading(true);

    setErrors(helpValidations(form));

    // Simulate Sign Up
    setTimeout(() => {
      setIsLoading(false);

      // If any field is empty, or contains errors
      if (
        !form.name ||
        !form.email ||
        !form.password ||
        !form.confirmation ||
        Object.keys(errors).length !== 0
      ) {
        window.alert("Incomplete or wrong data");
        return;
      } else {
        // Show success
        setIsSubmitted(true);

        // Reset Form
        setTimeout(() => {
          setForm(initialForm);
          setIsSubmitted(false);
        }, 2000);
      }
    }, 3000);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-2">
          Sign Up!
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
              onBlur={handleBlur}
              placeholder="Name"
              icon={User}
              error={errors.name}
            />

            {/* Email Input */}
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              icon={Mail}
              error={errors.email}
            />

            {/* Password Input */}
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password"
              icon={Lock}
              error={errors.password}
            />

            {/* Confirm Password Input */}
            <Input
              type="password"
              name="confirmation"
              value={form.confirmation}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Confirm Password"
              icon={CheckCircle}
              error={errors.confirmation}
            />
          </>
        ) : (
          /* CTA Feedback State (Displays After Submit) */
          <CtaFeedback
            title={"SignUp Succesful!"}
            subtitle={"Have a nice day! 💜"}
          />
        )}
        {/* Sign Up Button */}
        <Button
          variant="form"
          textValue={"Sign Up"}
          disabledCondition={
            !form.name ||
            !form.email ||
            !form.password ||
            !form.confirmation ||
            isLoading ||
            form.password !== form.confirmation
          }
          isLoading={isLoading}
          loadingValue={"Creating account..."}
          handler={handleSubmit}
        />
      </form>

      {/* Footer Disclaimer */}
      <FooterDisclaimer msg="This is a visual prototype. No data is being submitted." />
    </div>
  );
}
