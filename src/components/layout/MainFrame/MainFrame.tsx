import { ReactNode } from 'react';
import { Scrollable } from '../..';
import styles from './MainFrame.module.scss';

interface MainFrameProps {
  children: ReactNode;
}

const MainFrame = ({ children }: MainFrameProps) => {
  return <Scrollable style={styles.mainFrame}>{children}</Scrollable>;
};

export default MainFrame;
