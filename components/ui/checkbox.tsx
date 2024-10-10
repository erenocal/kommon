import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Checkbox({ className = '', ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={`form-checkbox h-5 w-5 text-black border-gray-300 rounded focus:ring-black ${className}`}
      {...props}
    />
  );
}