import React, { useState } from 'react';
import { User, Mail, Lock, CheckCircle } from 'lucide-react';
import { helpValidations } from '@/helpers/helpValidations';

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

  // On blur
  const handleBlur = (e) => {
    // Sets form values
    handleChange(e);

    // Validate all inputs
    const fieldErrors = helpValidations(form);

    const { name } = e.target;

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
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // On Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setErrors(helpValidations(form));

    // Simulate API call
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
        window.alert("Fake Sign Up Successful 💜");
        setForm(initialForm);
      }
    }, 1500);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Sign Up!</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full mx-auto"></div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2  text-accent/60 dark:text-accent-dark/60" size={18} />
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.name}
            required
            className="w-full bg-gray-100 dark:bg-gray-800 border-2 border-emerald-500/30 rounded-xl pl-10 pr-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 outline-none"
          />
          {/* Error for Name */}
          {errors.name && (
            <div className="absolute top-full mt-1 w-full p-2 rounded-md text-center text-white font-semibold bg-red-500 text-sm z-10">
              <p>{errors.name}</p>
            </div>
          )}
        </div>

        {/* Email Input */}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2  text-accent/60 dark:text-accent-dark/60" size={18} />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.email}
            required
            className="w-full bg-gray-100 dark:bg-gray-800 border-2 border-emerald-500/30 rounded-xl pl-10 pr-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 outline-none"
          />
          {/* Error for Email */}
          {errors.email && (
            <div className="absolute top-full mt-1 w-full p-2 rounded-md text-center text-white font-semibold bg-red-500 text-sm z-10">
              <p>{errors.email}</p>
            </div>
          )}
        </div>

        {/* Password Input */}
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2  text-accent/60 dark:text-accent-dark/60" size={18} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.password}
            required
            className="w-full bg-gray-100 dark:bg-gray-800 border-2 border-emerald-500/30 rounded-xl pl-10 pr-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 outline-none"
          />
          {/* Error for Password */}
          {errors.password && (
            <div className="absolute top-full mt-1 w-full p-2 rounded-md text-center text-white font-semibold bg-red-500 text-sm z-10">
              <p>{errors.password}</p>
            </div>
          )}
        </div>

        {/* Confirm Password Input */}
        <div className="relative">
          <CheckCircle className="absolute left-3 top-1/2 transform -translate-y-1/2  text-accent/60 dark:text-accent-dark/60" size={18} />
          <input
            type="password"
            name="confirmation"
            placeholder="Confirm Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.confirmation}
            required
            className="w-full bg-gray-100 dark:bg-gray-800 border-2 border-emerald-500/30 rounded-xl pl-10 pr-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 outline-none"
          />
          {/* Error for Confirm Password */}
          {errors.confirmation && (
            <div className="absolute top-full mt-1 w-full p-2 rounded-md text-center text-white font-semibold bg-red-500 text-sm z-10">
              <p>{errors.confirmation}</p>
            </div>
          )}
        </div>

        {/* Sign Up Button */}
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 dark:disabled:from-gray-600 dark:disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:hover:scale-100 focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 disabled:cursor-not-allowed mt-6 relative overflow-hidden"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Creating account...</span>
            </div>
          ) : (
            'Sign Up'
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="mt-6">
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 border border-gray-200 dark:border-gray-700/50">
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
            This is a visual prototype. No data is being submitted.
          </p>
        </div>
      </div>
    </div>
  );
}