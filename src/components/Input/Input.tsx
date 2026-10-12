import * as React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'primary', className, ...props }, ref) => (
    <input
      ref={ref}
      className={`ds-input ds-input--${variant} ${className ?? ''}`}
      {...props}
    />
  )
);
Input.displayName = 'Input';