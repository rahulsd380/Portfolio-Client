import React from "react";

interface InputFieldProps {
  type?: "text" | "email" | "number" | "select";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  options?: { label: string; value: string }[]; // For dropdown inputs
  isMultiline?: boolean; // To render textarea
  className?: string; // Additional CSS classes
}

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  isMultiline = false,
  className = "",
}) => {
  if (isMultiline) {
    return (
      <textarea
        className={`border border-border-10 rounded-md py-2 px-4 w-full text-white bg-white bg-opacity-5 focus:outline-none focus:border-2 focus:ring-0  ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
      />
    );
  }

  return (
    <input
      type={type}
      className={`border border-border-10 rounded-md py-2 px-4 w-full text-white bg-white bg-opacity-5 focus:outline-none focus:border-2 focus:ring-0  ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputField;
