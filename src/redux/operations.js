import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts, deleteContact, addContact } from '../api/api';

export const fetchContactsOperation =  createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
      const contacts = await getContacts();
    return contacts;
  }
);

export const deleteContactOperation =  createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
      const contact = await deleteContact(id);
      return contact;
  }
);

export const addContactOperation =  createAsyncThunk(
  'contacts/addContact',
  async (contact) => {
      const data = await addContact(contact);
      return data;
  }
);

