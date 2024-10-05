import { FC } from 'react';

interface ButtonProps {
  color: string;
}

export const Button: FC<ButtonProps> = ({ children, color, ...props }) => {
  return (
    <button className={`btn ${color}`} {...props}>
      {children}
    </button>
  );
};
