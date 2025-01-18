import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onEdit, onDelete }) => {
  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact._id}
          contact={contact}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;

