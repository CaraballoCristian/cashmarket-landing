"use client";

// Hooks
import { useState } from "react";
import { useValidations } from "@/hooks/useValidations";
import { useBackButtonClose } from "@/hooks/useBackButtonClose";
// UI
import {
  Mail,
  Users,
  Calendar,
  Lock,
  Smartphone,
  TrendingUp,
  Zap,
} from "lucide-react";
import FeatureItem from "../ui/featureItem";
import Badge from "../ui/badge";
import Input from "../ui/input";
import Button from "../ui/button";
import FooterDisclaimer from "../ui/footerDisclaimer";
import CtaFeedback from "../ui/ctaFeedback";
// Context
import { useModal } from "@/context/ModalContext";
// i18n
import { useTranslations } from "next-intl";

const emailRegex = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

export default function PrototypeContent() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  const t = useTranslations("modals.prototype");
  const v = useTranslations("validations");
  const validateForm = useValidations(v);

  /* Back Button Fix */
  useBackButtonClose(closeModal);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validations to avoid forcing disabled buttons
    const fieldErrors = validateForm({ email });
    setErrors(fieldErrors);

    // If any field is empty returns
    if (!email.trim() || Object.keys(fieldErrors).length !== 0) {
      setTimeout(() => setErrors({}), 1000);
      return;
    }

    // Simulate submit
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
        closeModal();
      }, 2000);
    }, 3000);
  };

  const handleChange = (e) => setEmail(e.target.value);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-6 bg-gradient-to-r from-primary-dark/80 to-accent/80 dark:from-accent/20 dark:to-primary/20 p-3 rounded-xl">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Zap className="text-bg dark:text-accent" size={24} />
          {/* Top */}
          <span className="text-bg dark:text-accent-dark font-semibold text-lg">
            {t("header.top")}
          </span>
        </div>
        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-2">
          {t("header.title")} <br />
          <span className="text-bg dark:text-acent-dark">Cashmarket</span>
        </h2>
      </div>

      {/* Features Grid */}
      <div className="mb-6">
        <div className="grid grid-cols-2 gap-3 md:ml-8">
          <FeatureItem icon={TrendingUp} msg={t("features.1")} />
          <FeatureItem icon={Zap} msg={t("features.2")} />
          <FeatureItem icon={Smartphone} msg={t("features.3")} />
          <FeatureItem icon={Lock} msg={t("features.4")} />
        </div>
      </div>

      {/* Waitlist Counter */}
      <Badge
        icon={Users}
        msg={t("badge")}
        containerStyles={"px-3 py-4 text-4xl border-muted mb-6"}
        iconStyles={"size-[18px]"}
        textStyles={"text-sm"}
      />

      {/* Email Input Section */}

      <div className="mb-6">
        {!isSubmitted ? (
          <div className="space-y-4">
            <Input
              type="email"
              name="username"
              value={email}
              onChange={handleChange}
              placeholder={t("placeholder")}
              icon={Mail}
              error={errors.email}
            />
            <Button
              variant="form"
              textValue={t("button")}
              disabledCondition={!email || !emailRegex.test(email) || isLoading}
              isLoading={isLoading}
              loadingValue={t("loading")}
              handler={handleSubmit}
            />
          </div>
        ) : (
          /* CTA Feedback */
          <CtaFeedback
            title={t("feedback.title")}
            subtitle={t("feedback.subtitle")}
          />
        )}
      </div>

      {/* Expected Launch */}
      <div className="mb-4">
        <div className="flex items-center gap-2 text-muted dark:text-muted-dark text-sm justify-center">
          <Calendar size={16} />
          <span>{t("launch")}</span>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <FooterDisclaimer msg={t("disclaimer")} />
    </div>
  );
}
