import React, { useState } from "react";
import {
  Mail,
  Users,
  Calendar,
  Lock,
  Smartphone,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function PrototypeContent() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (email && /\S+@\S+\.\S+/.test(email)) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setEmail("");
        }, 3000);
      }, 1500);
    }
  };

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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Get exclusive early access to{" "} <br />
          <span className="text-bg dark:text-acent-dark">Cashmarket</span>
        </h2>
      </div>

      {/* Features Grid */}
      <div className="mb-6">
        <div className="grid grid-cols-2 gap-3 md:ml-8">
          <div className="flex items-center gap-3 text-text dark:text-text-dark">
            <TrendingUp
              className="text-accent dark:text-accent-dark flex-shrink-0"
              size={18}
            />
            <span className="text-sm">Advanced Trading Tools</span>
          </div>
          <div className="flex items-center gap-3 text-text dark:text-text-dark">
            <Zap
              className="text-accent dark:text-accent-dark flex-shrink-0"
              size={18}
            />
            <span className="text-sm">AI Market Insights</span>
          </div>
          <div className="flex items-center gap-3 text-text dark:text-text-dark">
            <Smartphone
              className="text-accent dark:text-accent-dark flex-shrink-0"
              size={18}
            />
            <span className="text-sm">Mobile-First Design</span>
          </div>
          <div className="flex items-center gap-3 text-text dark:text-text-dark">
            <Lock
              className="text-accent dark:text-accent-dark flex-shrink-0"
              size={18}
            />
            <span className="text-sm">Bank-Level Security</span>
          </div>
        </div>
      </div>

      {/* Waitlist Counter */}
      <div className="mb-6">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <Users className="text-emerald-400" size={18} />
            <span className="text-sm">
              Join{" "}
              <span className="text-gray-900 dark:text-white font-semibold">
                2,847
              </span>{" "}
              users on the waitlist
            </span>
          </div>
        </div>
      </div>

      {/* Email Input Section */}
      <div className="mb-6">
        {!isSubmitted ? (
          <div className="space-y-4">
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent/60 dark:text-accent-dark/60"
                size={18}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-gray-100 dark:bg-gray-800 border-2 border-emerald-500/30 rounded-xl pl-10 pr-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 outline-none"
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!email || !/\S+@\S+\.\S+/.test(email) || isLoading}
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 dark:disabled:from-gray-600 dark:disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:hover:scale-100 focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Joining waitlist...</span>
                </div>
              ) : (
                "Get Early Access"
              )}
            </button>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/30 rounded-xl p-4">
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
                ✨ You're in!
              </p>
              <p className="text-emerald-700 dark:text-emerald-300 text-sm mt-1">
                Check your email for next steps
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Expected Launch */}
      <div className="mb-4">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm justify-center">
          <Calendar size={16} />
          <span>Expected launch: Q2 2026</span>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div>
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 border border-gray-200 dark:border-gray-700/50">
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
            This is a visual prototype. No data is being submitted.
          </p>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-dark to-accent dark:from-accent dark:to-primary "></div>
    </div>
  );
}
