import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './views/Home';
import People from './views/People';
import Vehicles from './views/Vehicles';
import Planets from './views/Planets';
import NotFound from './views/NotFound';


function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/planets" element={<Planets />} />
          {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
      </div>
    </>
  );
}

export default App;
