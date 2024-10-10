import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  as?: React.ElementType;
}

export default function Button({ children, variant = 'primary', className = '', as: Component = 'button', ...props }: ButtonProps) {
  const baseClasses = 'px-4 py-2 rounded-md font-semibold transition-colors duration-200 ease-in-out';
  const variantClasses = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300',
    outline: 'border border-black text-black hover:bg-gray-100',
  };

  return (
    <Component className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}