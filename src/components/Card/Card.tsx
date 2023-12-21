import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

const Card = (props: CardProps) => {
  return (
    <div>
      {/* contenedor */}
      <div>{/* imagen */}</div>
      <div>{/* title */}</div>
      <div>{/* autor */}</div>
    </div>
  );
};

export default Card;
