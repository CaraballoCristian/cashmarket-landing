/* Component Ready */
"use client";
// Hooks
import { useState } from "react";
// UI
import { User, Lock } from "lucide-react";
import Input from "../ui/input";
import FooterDisclaimer from "../ui/footerDisclaimer";
import Button from "../ui/button.jsx";
import CtaFeedback from "../ui/ctaFeedback";

const initialForm = {
  username: "",
  password: "",
};

export default function LoginContent() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // On Submit
  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    setIsLoading(true);

    // Simulate Login
    setTimeout(() => {
      setIsLoading(false);

      // If any field is empty
      if (!form.username || !form.password) {
        setError("Incomplete Data");
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
          Login
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
              placeholder="Username"
              icon={User}
            />

            {/* Password Input */}
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              icon={Lock}
            />
          </>
        ) : (
          /* CTA Feedback State (Displays After Submit) */
          <CtaFeedback
            title={"Login Succesful!"}
            subtitle={"Have a nice day! 💜"}
          />
        )}

        {/* Login Button */}
        <Button
          variant="form"
          textValue={"Login"}
          disabledCondition={!form.username || !form.password || isLoading}
          isLoading={isLoading}
          loadingValue={"Logging in..."}
          handler={handleSubmit}
        />
      </form>

      {/* Footer Disclaimer */}
      <FooterDisclaimer
        msg={"This is a visual prototype. No data is being submitted."}
      />
    </div>
  );
}
