import { Link } from 'react-router-dom';
// import { Button } from '. =./..';
import styles from './SideBar.module.scss';

interface SideBarProps {
  menuState: boolean;
}

const menuOptions = [
  {
    icon: 'home_FILL0_wght200_GRAD0_opsz24.svg',
    text: 'Home',
    goTo: '/',
  },
  {
    icon: 'search_FILL0_wght200_GRAD0_opsz24.svg',
    text: 'Explore',
    goTo: '/explore',
  },
  {
    icon: 'library_music_FILL0_wght200_GRAD0_opsz24.svg',
    text: 'Library',
    goTo: '/library',
  },
];

const SideBar = ({ menuState }: SideBarProps) => {
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.optionWrapper}>
        {menuOptions.map(({ icon, text, goTo }, index) => (
          <Link className={styles.menuOption} to={goTo} key={index}>
            {<img src={icon} className={styles.icon} />}
            {menuState && <p className={styles.textHolder}>{text}</p>}
          </Link>
        ))}
      </div>

      <div>{/* seccion de guardados */}</div>
    </div>
  );
};

export default SideBar;
