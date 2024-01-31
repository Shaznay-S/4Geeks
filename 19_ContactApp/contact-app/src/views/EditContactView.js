import React, { useContext, useState, useEffect } from 'react';
import ContactContext from '../context/ContactContext';
import Modal from '../components/Modal';
import '../styles/Modal.css';

const EditContactView = ({ show, contactToEdit, onClose }) => {
  const { actions } = useContext(ContactContext);
  const [contact, setContact] = useState(contactToEdit);

  useEffect(() => {
    setContact(contactToEdit);
  }, [contactToEdit]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.updateContact(contact.id, contact);
    onClose();
  };

  if (!show) return null;

  return (
    <Modal show={show} onClose={onClose}>
    <div className='modal-form'>
      <form onSubmit={handleSubmit} className="edit-contact-form">
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
        <button type="submit">Update Contact</button>
      </form>
      </div>
    </Modal>
  );
};

export default EditContactView;
