import { ReactNode } from 'react';
import styles from './Scrollable.module.scss';

interface ScrollableProps {
  className?: string;
  children: ReactNode;
}

const Scrollable = ({ className, children }: ScrollableProps) => {
  return <div className={`${styles.scrollable} ${className}`}>{children}</div>;
};

export default Scrollable;
