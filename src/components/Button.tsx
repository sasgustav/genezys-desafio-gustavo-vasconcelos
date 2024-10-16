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
}) => {
  return (
    <button
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
