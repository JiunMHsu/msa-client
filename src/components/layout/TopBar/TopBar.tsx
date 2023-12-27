import { useNavigate } from 'react-router-dom';
import { Button } from '../..';
import styles from './TopBar.module.scss';

interface TopBarProps {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopBar = ({ setMenu }: TopBarProps) => {
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenu(prev => !prev);
  };

  return (
    <div className={styles.topBarContainer}>
      {/* MENU BUTTON */}
      <Button className={styles.menuButton} onClick={toggleMenu}>
        <img
          src="menu_FILL0_wght200_GRAD0_opsz24.svg"
          alt=""
          className={styles.icon}
        />
      </Button>

      {/* LOGO */}
      <div className={styles.mainLogo}>
        <img src="" alt="" />
        <h1 className={styles.logoName}>LOGO</h1>
      </div>

      {/* NAVIGATE BUTTONS */}
      <div className={styles.navigators}>
        <Button
          className={styles.navigateButton}
          onClick={() => {
            navigate(-1);
          }}
        >
          <img
            src="keyboard_arrow_left_FILL0_wght200_GRAD0_opsz24.svg"
            alt=""
            className={styles.icon}
          />
        </Button>
        <Button
          className={styles.navigateButton}
          onClick={() => {
            navigate(1);
          }}
        >
          <img
            src="keyboard_arrow_right_FILL0_wght200_GRAD0_opsz24.svg"
            alt=""
            className={styles.icon}
          />
        </Button>

      {/* <Button onClick={() => {}}>SOME OPTION</Button> */}

      <Button className={styles.userButton} onClick={() => {}}>
        <img
          src="account_circle_FILL1_wght200_GRAD0_opsz24.svg"
          alt=""
          className={styles.icon}
          />
      </Button>
          </div>
    </div>
  );
};

export default TopBar;
