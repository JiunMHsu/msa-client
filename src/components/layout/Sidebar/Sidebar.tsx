import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../..';

import styles from './Sidebar.module.scss';

const SideBar = () => {
  const [menuLayout, setMenuLayout] = useState(true);

  const menuOptions = [
    {
      icon: '* ',
      text: 'Home',
      goTo: '/',
    },
    {
      icon: '* ',
      text: 'Explore',
      goTo: '/explore',
    },
    {
      icon: '* ',
      text: 'Library',
      goTo: '/library',
    },
  ];

  const toggleMenu = () => {
    setMenuLayout(prev => !prev);
    // despliega el menu
  };

  return (
    <div>
      <Button className={styles.menuButton} onClick={toggleMenu}>
        MENU
      </Button>
      <div className={styles.optionWrapper}>
        {menuOptions.map(({ icon, text, goTo }, index) => (
          <Link className={styles.menuOption} to={goTo} key={index}>
            {icon}
            {menuLayout && text}
          </Link>
        ))}
      </div>

      <div>{/* seccion de guardados */}</div>
    </div>
  );
};

export default SideBar;
