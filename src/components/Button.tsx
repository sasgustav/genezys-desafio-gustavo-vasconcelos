import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-disabled={disabled}
      role="button"
    >
      {label}
    </button>
  );
};

export default Button;
