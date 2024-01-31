import React, { useContext, useState } from 'react';
import ContactContext from '../context/ContactContext';
import '../styles/AddContactView.css';

const AddContactView = ({ existingContact }) => {
  const { actions } = useContext(ContactContext);
  const [contact, setContact] = useState(existingContact || { full_name: '', email: '', address: '', phone: '', agenda_slug: 'personal' });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Determine whether to add a new contact or update an existing one based on the presence of 'existingContact'
    if (existingContact) {
      actions.updateContact(existingContact.id, contact, contact.agenda_slug);
    } else {
      actions.addContact(contact, contact.agenda_slug);
    }
    // Optionally, redirect user after submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input type="text" name="full_name" value={contact.full_name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={contact.email} onChange={handleChange} />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={contact.address} onChange={handleChange} />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={contact.phone} onChange={handleChange} />
      </label>
      <label>
        Agenda:
        <select name="agenda_slug" value={contact.agenda_slug} onChange={handleChange}>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
        </select>
      </label>
      <button type="submit">Save Contact</button>
    </form>
  );
};

export default AddContactView;
