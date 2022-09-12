import React from 'react';
import PropTypes from 'prop-types';
import ContactElement from './ContactElement';


const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ name, phone, id }) => (
      <ContactElement name={name} number={phone} id={id} onDeleteContact={onDeleteContact} />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,      
    })
  ),
};

export default ContactList;