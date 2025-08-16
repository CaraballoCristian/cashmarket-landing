import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Input = ({
  onChange,
  onBlur,
  value,
  icon,
  placeholder,
  type,
  name,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const Icon = icon;

  return (
    <div className="relative">
      {/* Icon */}
      <Icon
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent/60 dark:text-accent-dark/60"
        size={18}
      />

      {/* Input */}
      <input
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`
        ${error && "animate-shake border-red-500"}
        w-full bg-bg dark:bg-muted border-2 border-accent/30 rounded-xl pl-10 pr-4 py-3 text-text dark:text-text-dark placeholder-muted/70 dark:placeholder-muted-dark focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 outline-none`}
      />
      {/*  Show Password Button  */}
      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-dark hover:text-text dark:hover:text-text-dark transition-colors"
        >
          {/* Eye Icons */}
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
      {error && (
        <div className="absolute top-full mt-1 w-full p-2 rounded-md text-center text-white font-semibold bg-red-500 text-sm z-10">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
