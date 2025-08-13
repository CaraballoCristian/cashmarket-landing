"use client";

// Hooks
import { useState } from "react";
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

export default function PrototypeContent() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const emailRegex = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  const handleSubmit = () => {
    if (email && emailRegex.test(email)) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setEmail("");
        }, 2000);
      }, 3000);
    } 
  };

  const handleChange = (e) => setEmail(e.target.value);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-6 bg-gradient-to-r from-primary-dark/80 to-accent/80 dark:from-accent/20 dark:to-primary/20 p-3 rounded-xl">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Zap className="text-bg dark:text-accent" size={24} />
          <span className="text-bg dark:text-accent-dark font-semibold text-lg">
            Prototype Access
          </span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Get exclusive early access to <br />
          <span className="text-bg dark:text-acent-dark">Cashmarket</span>
        </h2>
      </div>

      {/* Features Grid */}
      <div className="mb-6">
        <div className="grid grid-cols-2 gap-3 md:ml-8">
          <FeatureItem icon={TrendingUp} msg={"Advanced Trading Tools"} />
          <FeatureItem icon={Zap} msg={"AI Market Insights"} />
          <FeatureItem icon={Smartphone} msg={"Mobile-First Design"} />
          <FeatureItem icon={Lock} msg={"Bank-Level Security"} />
        </div>
      </div>

      {/* Waitlist Counter */}
      <Badge
        icon={Users}
        msg={"Join 2,847 users on the waitlist"}
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
              placeholder="Email"
              icon={Mail}
            />
            <Button
              variant="form"
              textValue={"Get Early Access"}
              disabledCondition={!email || !emailRegex.test(email) || isLoading}
              isLoading={isLoading}
              loadingValue={"Joining waitlist..."}
              handler={handleSubmit}
            />
          </div>
        ) : (
          <CtaFeedback
            title="✨ You're in!"
            subtitle="Check your email for next steps"
          />
        )}
      </div>

      {/* Expected Launch */}
      <div className="mb-4">
        <div className="flex items-center gap-2 text-muted dark:text-muted-dark text-sm justify-center">
          <Calendar size={16} />
          <span>Expected launch: Q2 2026</span>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <FooterDisclaimer msg="This is a visual prototype. No data is being submitted." />
    </div>
  );
}
