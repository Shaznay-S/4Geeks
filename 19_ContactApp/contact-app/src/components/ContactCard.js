import React, { useState } from 'react';
import EditContactView from '../views/EditContactView';

const ContactCard = ({ contact, onDelete, onUpdate }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
  };

  return (
    <div className="contact-card">
      <div className="contact-info">
        <p>{contact.full_name}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <p>{contact.address}</p>
      </div>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => onDelete(contact.id)}>Delete</button>

      {showEditModal && (
        <EditContactView
          show={showEditModal}
          contactToEdit={contact}
          onClose={handleCloseModal}
          onSave={onUpdate}
        />
      )}
    </div>
  );
};

export default ContactCard;
