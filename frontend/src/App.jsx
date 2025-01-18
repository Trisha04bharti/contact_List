import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { getContacts, createContact, updateContact, deleteContact } from './services/contactService';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);

  const fetchContacts = async () => {
    const res = await getContacts();
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleAddOrEdit = async (contact) => {
    if (editContact) {
      await updateContact(editContact._id, contact);
    } else {
      await createContact(contact);
    }
    setEditContact(null);
    fetchContacts();
  };

  const handleDelete = async (id) => {
    await deleteContact(id);
    fetchContacts();
  };

  return (
    <div className="app">
      <h1>Contact List</h1>
      <ContactForm onSubmit={handleAddOrEdit} editContact={editContact} />
      <ContactList contacts={contacts} onEdit={setEditContact} onDelete={handleDelete} />
    </div>
  );
};

export default App;

