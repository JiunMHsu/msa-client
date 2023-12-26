import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick: () => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  const clickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    onClick();
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
