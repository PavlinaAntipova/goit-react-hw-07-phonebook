import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContactOperation } from 'redux/operations';

import s from './FormContacts.module.css';

export default function FormContacts() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const reset = () => {
          setName('');
          setPhone('');
  }

  const checkingExistContact = contacts.find(contact => contact.name === name);
  return (
    
      <form
      className={s.Form}
      onSubmit={e => {
        e.preventDefault();
        if (checkingExistContact) {
          alert(`${name} is already in the contacts!`);
          reset();
          return;
        }
        dispatch(addContactOperation({ name, phone }));
        reset();
      }}
      >
        <label className={s.name}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="name goes here"
            required
            value={name}
            onChange={e => {setName( e.target.value)}}
          />
        </label>
        <label className={s.phone}>
          Phone
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="number goes here"
            required
            value={phone}
            onChange={e => {setPhone( e.target.value)}}
          />
        </label>
        <button className={s.button} type="submit">
          Add Contact
        </button>
      </form>
    );
}
