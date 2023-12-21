import { useState } from 'react';
import Button from '../Button/Button';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [menuLayout, setMenuLayout] = useState(false);

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
      {/* <button className={styles.menuButton}></button> */}
      <Button className={styles.menuButton} onClick={toggleMenu}>
        MENU
      </Button>
      <div className={styles.optionWrapper}>
        {menuOptions.map(({ icon, text, goTo }) => (
          <Link className={styles.menuOption} to={goTo}>
            {icon}
            {menuLayout && text}
          </Link>
        ))}
      </div>

      <div>{/* seccion de guardados */}</div>
    </div>
  );
};

export default Sidebar;
