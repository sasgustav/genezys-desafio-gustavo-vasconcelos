import React from "react";

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  const inputId = `input-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="mb-4">
      <label
        htmlFor={inputId}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-label={label}
        aria-required={required}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-outline"
      />
    </div>
  );
};

export default Input;
