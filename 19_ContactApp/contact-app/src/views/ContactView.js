import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../context/ContactContext';
import AddContactView from './AddContactView';
import ContactList from '../components/ContactList';
import '../styles/ContactView.css';

const ContactView = () => {
  const { store, actions } = useContext(ContactContext);
  const [showAddContact, setShowAddContact] = useState(false);
  const [currentAgenda, setCurrentAgenda] = useState('personal');

  useEffect(() => {
    actions.loadContacts(currentAgenda);
  }, [actions, currentAgenda]);

  const handleAddContact = () => {
    setShowAddContact(true);
  };

  const handleAgendaChange = (e) => {
    setCurrentAgenda(e.target.value);
   //actions.loadContacts(e.target.value); // Load contacts for selected agenda
  };

  return (
    <div className="contact-view">
      <div className="header">
        <div className="current-agenda">
          Current Agenda: {currentAgenda}
          <select onChange={handleAgendaChange} value={currentAgenda}>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
          </select>
        </div>
        <button onClick={handleAddContact} className="add-contact-button">
          Add New Contact
        </button>
      </div>
      {showAddContact && (
        <AddContactView
          show={showAddContact}
          currentAgenda={currentAgenda}
          onClose={() => setShowAddContact(false)}
        />
      )}
      <ContactList
        contacts={store.contacts[currentAgenda]}
        onUpdate={actions.updateContact}
        onDelete={actions.deleteContact}
      />
    </div>
  );
};

export default ContactView;
