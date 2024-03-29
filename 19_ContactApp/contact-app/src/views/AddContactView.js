import React, { useContext, useState } from 'react';
import ContactContext from '../context/ContactContext';
import Modal from '../components/Modal';
import '../styles/Modal.css';

const AddContactView = ({ show, currentAgenda, onClose }) => {
  const { actions } = useContext(ContactContext);
  const initialContactState = {
    full_name: '',
    email: '',
    phone: '',
    address: '',
    agenda_slug: currentAgenda
  };

  const [contact, setContact] = useState(initialContactState);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { ...contact, agenda_slug: currentAgenda };
    actions.addContact(newContact);
    onClose();
  };

  if (!show) return null;

  return (
    <Modal show={show} onClose={onClose}>
      <div className='modal-form'>
        <form onSubmit={handleSubmit} className="add-contact-form">
        <label>
          Full Name:
          <input
            type="text"
            name="full_name"
            value={contact.full_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={contact.address}
            onChange={handleChange}
          />
        </label>
          <button type="submit" className="save-button">Add Contact</button>
        </form>
      </div>
    </Modal>
  );
};

export default AddContactView;
