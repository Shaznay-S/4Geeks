import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactContext from './context/ContactContext';
import useGlobalState from './store/flux';
import ContactView from './views/ContactView';

const App = () => {
  const { state, actions } = useGlobalState();

  const contextValue = {
    store: state,
    actions
  };

  return (
    <ContactContext.Provider value={contextValue}>
      <Router>
        <Routes>
          <Route path="/" element={<ContactView />} />
        </Routes>
      </Router>
    </ContactContext.Provider>
  );
};

export default App;
