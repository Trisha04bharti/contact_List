import React from 'react';

const ContactItem = ({ contact, onEdit, onDelete }) => {
  return (
    <li className="contact-item">
      <div className="contact-details">
        <span className="contact-name">{contact.name}</span>
        <span className="contact-email">{contact.email}</span>
        <span className="contact-phone">{contact.phone}</span>
      </div>
      <div className="contact-actions">
        <button onClick={() => onEdit(contact)} className="edit-btn">Edit</button>
        <button onClick={() => onDelete(contact._id)} className="delete-btn">Delete</button>
      </div>
    </li>
  );
};

export default ContactItem;
