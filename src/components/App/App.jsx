import React from 'react';

import FormContacts from '../FormContacts';
import Filter from '../Filter';
import ContactList from '../ContactsList';

import s from './App.module.css';


export default function App() {

  return (
    
    <div className={s.AppContainer}>
        <h1 className={s.title}>My Contacts</h1>
        <FormContacts/>
        <Filter/>
        <ContactList/>
      </div>
    );
};
 


