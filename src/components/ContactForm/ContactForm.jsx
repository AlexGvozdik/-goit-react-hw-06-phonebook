import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from '../../redux/slicers'
import s from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    
    const findContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (findContact) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      dispatch(addContact({ 
        id: uuidv4(),
        name,
        number,
       }));
      setName('');
      setNumber('');
    }
    
  };

  return (
    <form  className={s.form} onSubmit={handleSubmit}>
      <label className={s.lable}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={e => setName(e.target.value)}
          required
        />
      </label>

      <label className={s.lable}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={e => setNumber(e.target.value)}
          required
        />
      </label>

      <button type="submit" className={s.submitBtn}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.PropsType = {
  onSubmit: PropTypes.func.isRequired,
};
