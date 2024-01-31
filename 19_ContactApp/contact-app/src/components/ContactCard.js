import React from 'react';
import '../styles/ContactCard.css'

const ContactCard = (props) => {
  // extract the contact details you expect to receive
  const { full_name, email, address, phone, onDelete, onEdit } = props;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{full_name}</h5>
        <p className="card-text">{email}</p>
        <p className="card-text">{address}</p>
        <p className="card-text">{phone}</p>
        <button onClick={onEdit} className="btn btn-primary">
          Edit
        </button>
        <button onClick={onDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
