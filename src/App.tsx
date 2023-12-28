import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SideBar, TopBar, Scrollable } from './components';
import { Explore, Home, Library } from './views';

import styles from './App.module.scss';

const App = () => {
  // const [windowSize, setWindowSize] = useState([
  //   window.innerWidth,
  //   window.innerHeight,
  // ]);

  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowSize([window.innerWidth, window.innerHeight]);
  //   };

  //   window.addEventListener('resize', handleWindowResize);

  //   return () => {
  //     window.removeEventListener('resize', handleWindowResize);
  //   };
  // }, []);

  const [openMenu, setOpenMenu] = useState(true);

  return (
    <div className={styles.app}>
      <TopBar setMenu={setOpenMenu} />
      <div className={styles.sideBarAndMainFrameWrapper}>
        <SideBar openMenu={openMenu} />

        <Scrollable className={styles.mainFrame}>
          <Routes>
            {/* Main Section */}
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </Scrollable>

        <div className={styles.rightSideBlock}></div>
      </div>

      <div className={styles.playBar}>play bar</div>
    </div>
  );
};

export default App;
