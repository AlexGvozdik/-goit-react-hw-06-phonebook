import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
// import initialContacts from './data.json';

 export default function App() {
  const contacts=useSelector(state=>state.contacts)
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm  />
      <h2>Contacts </h2>
      <Filter />
      <ContactList/>
    </div>
  );
};