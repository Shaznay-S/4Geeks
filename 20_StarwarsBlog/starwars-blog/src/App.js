// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './views/Home';
import DetailsView from './views/DetailsView';
import NotFound from './views/NotFound';


function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:type/:id" element={<DetailsView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
