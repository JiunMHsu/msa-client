import { Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';

const App = () => {
  return (
    <>
      <SideBar />
      <div>{/* Side Nav */}</div>
      <div>{/* Top Bar */}</div>
      <Routes>
        {/* Main Section */}
        <Route path="/" element={'asd'} />
      </Routes>

      <div>{/* Play Bar */}</div>
    </>
  );
};

export default App;
