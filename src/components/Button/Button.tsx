import * as React from 'react';
import { cn } from '../../lib/cn';
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary',className, ...props }, ref) => (
    <button
      ref={ref}
      // className={`ds-button ds-button--${variant} ${className ?? ''}`}
      className={cn('ds-button', `ds-button--${variant}`, className)}
      {...props}
    >
      {props.children}
    </button>
  )
);
Button.displayName = 'Button';