import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './components';
import { Explore, Home, Library } from './views';

const App = () => {
  return (
    <>
      <Sidebar /> {/* side nav */}
      <div>{/* Top Bar */}</div>
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
