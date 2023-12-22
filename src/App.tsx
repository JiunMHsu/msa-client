import { Route, Routes } from 'react-router-dom';
import { SideBar, TopBar } from './components';
import { Explore, Home, Library } from './views';

const App = () => {
  return (
    <>
      <TopBar />
      <SideBar /> {/* side nav */}
      <Routes>
        {/* Main Section */}
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/library" element={<Library />} />
      </Routes>
      <div>{/* Play Bar */}</div>
    </>
  );
};

export default App;
