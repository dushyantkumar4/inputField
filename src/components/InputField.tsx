import React, { useState } from "react";

interface InputFieldProps {
  inputType?: React.HTMLInputTypeAttribute;
  value?: string | number | boolean | null;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  inputType,
  value,
  name,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",
  loading = false,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  };

  const variantClasses = {
    filled: "bg-gray-100 border border-transparent focus:border-blue-500",
    outlined: "border border-gray-300 focus:border-blue-500",
    ghost: "border-none bg-transparent focus:ring-0",
  };

  return (
    <div className="w-full mx-auto ">
      {label && (
        <label className="block mb-3 text-sm font-medium text-gray-600">{label}</label>
      )}
      <div className="relative flex items-center">
        <input
          type={inputType === "password" ? (showPassword ? "text" : "password") : inputType}
          value={value ? String(value) : ""}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          className={`w-full rounded-md  ${sizeClasses[size]} 
            ${variantClasses[variant]} 
            ${
              invalid
                ? "border-red-500 text-red-600 dark:border-red-400 dark:text-red-400"
                : ""
            }
            ${
              disabled || loading
                ? "bg-gray-200 dark:bg-gray-800 cursor-not-allowed"
                : ""
            }
            dark:placeholder-gray-500`}
        />

        {value && !disabled && (
          <button
            type="button"
            onClick={() =>
              onChange?.({
                target: { name, value: "" },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            className="absolute -right-19 text-gray-400 dark:text-gray-500 border rounded px-3 py-1 ml-5"
            
          >
            clear
          </button>
        )}
        {inputType === "password" && !disabled && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 text-gray-400 dark:text-gray-500 "
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "hide" : "show"}
          </button>
        )}
      </div>
      {helperText && !invalid && (
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      )}
      {invalid && errorMessage && (
        <p className="mt-1 text-xs text-red-600 dark:text-red-400">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputField;
