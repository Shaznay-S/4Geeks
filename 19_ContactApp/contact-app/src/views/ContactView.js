import React, { useContext, useEffect } from 'react';
import ContactContext from '../context/ContactContext';
import ContactList from '../components/ContactList';

const ContactView = () => {
  const { store, actions } = useContext(ContactContext);

  useEffect(() => {
    // Assuming 'loadContacts' action requires the current agenda slug as an argument
    actions.loadContacts(store.currentAgenda);
  }, [actions, store.currentAgenda]);

  return (
    <div>
      <h2>Contacts in {store.currentAgenda}</h2>
      <ContactList contacts={store.contacts[store.currentAgenda]} />
    </div>
  );
};

export default ContactView;
