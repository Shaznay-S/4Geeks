import React, { useContext, useState, useEffect } from 'react';
import ContactContext from '../context/ContactContext';
import Modal from '../components/Modal';
import '../styles/Modal.css';

const EditContactView = ({ show, contactToEdit, onClose }) => {
  const { actions } = useContext(ContactContext);
  const [contact, setContact] = useState(contactToEdit);

  useEffect(() => {
    console.log('Received contact to edit:', contactToEdit);
    setContact(contactToEdit);
  }, [contactToEdit]);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    console.log(`Change detected on field ${fieldName} with value: ${fieldValue}`);

    // Update the contact state with the changed field
    setContact((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));

    // Log the updated state after change
    console.log('Updated state after change:', {
      ...contact,
      [fieldName]: fieldValue,
    });
  };
  /*
  const handleChange = (e) => {
    console.log(`Change detected on field ${e.target.name} with value: ${e.target.value}`);
    setContact(prevState => {
      const updatedState = { ...prevState, [e.target.name]: e.target.value };
      console.log('Updated state after change:', updatedState);
      return updatedState;
    });
  };
*/
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting updated contact:', contact);
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
