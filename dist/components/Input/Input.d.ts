import * as React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: 'primary' | 'secondary';
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
