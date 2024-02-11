import * as react_jsx_runtime from 'react/jsx-runtime';
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

/**
 * Primary UI component for user interaction
 */
interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    size?: 'sm' | 'md';
    variant?: 'primary' | 'secondary' | 'tertiary';
}
declare const Button: ({ className, size, variant, ...rest }: ButtonProps) => react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps };
