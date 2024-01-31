import React, { useState, useContext } from 'react';
// Import the context if using Context API

const AddContact = ({ onSave, contact = {} }) => {
  // useState hooks for form fields, initialized with contact properties or empty strings
  const [fullName, setFullName] = useState(contact.full_name || '');
  const [email, setEmail] = useState(contact.email || '');
  const [address, setAddress] = useState(contact.address || '');
  const [phone, setPhone] = useState(contact.phone || '');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call onSave and pass the new contact object
    onSave({
      full_name: fullName,
      email: email,
      address: address,
      phone: phone
    });
  };

  // JSX for the form
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          className="form-control"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          className="form-control"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="tel"
          className="form-control"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
};

export default AddContact;
