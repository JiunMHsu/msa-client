import { ReactNode } from 'react';
import styles from './Scrollable.module.scss';

interface ScrollableProps {
  style?: string;
  children: ReactNode;
}

const Scrollable = ({ style, children }: ScrollableProps) => {
  return <div className={`${styles.scrollable} ${style}`}>{children}</div>;
};

export default Scrollable;
