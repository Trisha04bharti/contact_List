import axios from 'axios';

const BASE_URL = 'http://localhost:5000/contacts';

export const getContacts = async () => await axios.get(BASE_URL);
export const createContact = async (contact) => await axios.post(BASE_URL, contact);
export const updateContact = async (id, contact) => await axios.put(`${BASE_URL}/${id}`, contact);
export const deleteContact = async (id) => await axios.delete(`${BASE_URL}/${id}`);
