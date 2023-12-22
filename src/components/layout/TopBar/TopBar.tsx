import { useNavigate } from 'react-router-dom';

import { Button } from '../..';

const TopBar = () => {
  const navigate = useNavigate();

  const toggleMenu = () => {
    // usar contexto para comunicar con el side menu
    // despliega el menu
  };

  return (
    <div className="topbarContainer">
      {/* MENU BUTTON */}
      <Button onClick={toggleMenu}>MENU</Button>

      {/* LOGO */}
      <div className={'LOGO'}>
        <h1>LOGO</h1>
      </div>

      {/* NAVIGATE BUTTONS */}
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        GO PREV
      </Button>
      <Button
        onClick={() => {
          navigate(1);
        }}
      >
        GO NEXT
      </Button>

      <Button onClick={() => {}}>SOME OPTION</Button>

      <Button onClick={() => {}}>
        {/* <img src="/user/profile" alt="" /> */}
        USER
      </Button>
    </div>
  );
};

export default TopBar;
