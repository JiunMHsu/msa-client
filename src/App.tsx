import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SideBar, TopBar, Scrollable, PlayBar } from './components';
import { routes } from './data';
import styles from './App.module.scss';

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles.app}>
      <TopBar setMenu={setOpenMenu} />
      <div className={styles.sideBarAndMainFrameWrapper}>
        <SideBar openMenu={openMenu} />

        <Scrollable className={styles.mainFrame}>
          <Routes>
            {/* Main Section */}
            {routes.map(({ path, Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
          </Routes>
        </Scrollable>

        <div className={styles.rightSideBlock}></div>
      </div>

      <PlayBar
        playBarStyles={styles.playBar}
        track={{
          title: '',
          src: '',
        }}
      />

      {/* <div className={styles.playBar}>play bar</div> */}
    </div>
  );
};

export default App;
