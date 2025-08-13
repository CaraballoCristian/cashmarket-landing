/* Component Ready */

// Hooks
import { useState } from "react";
// UI
import { User, Lock } from "lucide-react";
import Input from "../ui/formInput";
import FooterDisclaimer from "../ui/footerDisclaimer";
import ButtonForm from "../ui/button.jsx";
import CtaFeedback from "../ui/ctaFeedback";

const initialForm = {
  username: "",
  password: "",
};

export default function LoginContent() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);

      // Show success
      setIsSubmitted(true);

      // Reset Form
      setTimeout(() => {
        setForm(initialForm);
        setIsSubmitted(false);
      }, 1500);
    }, 1500);
  };

  // On Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
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
        <ButtonForm
          textValue={"Login"}
          disabledCondition={!form.username || !form.password || isLoading}
          isLoading={isLoading}
          loadingValue={"Logging in..."}
          handler={handleLogin}
        />
      </form>

      {/* Footer Disclaimer */}
      <FooterDisclaimer
        msg={"This is a visual prototype. No data is being submitted."}
      />
    </div>
  );
}
