import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SideBar, TopBar, Scrollable, PlayBar } from './components';
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

  const [openMenu, setOpenMenu] = useState(false);

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

      <PlayBar
        playBarStyles={styles.playBar}
        track={{
          title: '',
          src: 'http://127.0.0.1:5000/api/track/102a79ab-9cb3-42d1-8154-b3e445ad2ae4/play',
        }}
      />

      {/* <div className={styles.playBar}>play bar</div> */}
    </div>
  );
};

export default App;
