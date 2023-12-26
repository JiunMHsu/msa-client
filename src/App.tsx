import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SideBar, TopBar, MainFrame } from './components';
import { Explore, Home, Library } from './views';

import styles from './App.module.scss';

const App = () => {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <>
      <TopBar setMenu={setOpenMenu} />
      <div className={styles.sideBarAndMainFrameWrapper}>
        <SideBar menuState={openMenu} />

        <MainFrame>
          <Routes>
            {/* Main Section */}
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </MainFrame>
      </div>

      <div>{/* Play Bar */}</div>
    </>
  );
};

export default App;
