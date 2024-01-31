import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactContext from './context/ContactContext';
import useGlobalState from './store/flux';

// Import your views
import ContactView from './views/ContactView';
import AddContactView from './views/AddContactView'; // Assuming you choose to use AddContactView for add/edit

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
          <Route path="/add" element={<AddContactView />} />
          {/* If you decide to use AddContactView for editing as well */}
          <Route path="/edit/:contactId" element={<AddContactView />} />
        </Routes>
      </Router>
    </ContactContext.Provider>
  );
};

export default App;

