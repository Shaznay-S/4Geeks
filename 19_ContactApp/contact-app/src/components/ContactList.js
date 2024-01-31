import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactContext from '../context/ContactContext';
import ContactCard from './ContactCard'; // Ensure this path matches your project structure
import '../styles/ContactList.css';

const ContactList = () => {
  const { store, actions } = useContext(ContactContext);
  const navigate = useNavigate();

  // Assuming 'store.contacts' structure matches what you provided
  const contacts = store.contacts[store.currentAgenda] || [];

  const handleDelete = (contactId) => {
    actions.deleteContact(contactId, store.currentAgenda);
    // Optionally, refresh contacts list after deletion
    actions.loadContacts(store.currentAgenda);
  };

  const handleEdit = (contactId) => {
    // Navigate to the edit page with the contactId
    navigate(`/edit/${contactId}`);
  };

  return (
    <div>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            full_name={contact.full_name}
            email={contact.email}
            address={contact.address}
            phone={contact.phone}
            onDelete={() => handleDelete(contact.id)}
            onEdit={() => handleEdit(contact.id)}
          />
        ))
      ) : (
        <p>No contacts found in {store.currentAgenda}.</p>
      )}
    </div>
  );
};

export default ContactList;
