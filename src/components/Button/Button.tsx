import { ReactNode } from 'react';

type ButtonProps = {
  children?: ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default Button;
