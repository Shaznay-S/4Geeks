import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ({ contacts, onUpdate, onDelete }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ContactList;

