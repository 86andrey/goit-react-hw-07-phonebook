import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import styled from 'styled-components';
import { Loader } from '../Loader/loader';
import toast, { Toaster }  from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addContact, deleteContact, fetchContacts } from '../../redux/contacts/contacts-operation';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter, visibleContacts, getLoaderStatus} from '../../redux/selectors';

export default function Phonebook() {
  const contacts = useSelector(visibleContacts);  
  const filter = useSelector(getFilter);
   const isLoaderActive = useSelector(getLoaderStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = (payload) => {
     const isContact = contacts.find(
       item => item.name.toLowerCase() === payload.name.toLowerCase());
    if(isContact){
        toast.error(`${payload.name} is already in contact`);
        return;
    };
    const action = addContact(payload);
    dispatch(action)
  };

  const onRemoveContact = (payload) => {
    dispatch(deleteContact(payload))
  };

  const onSetFilter = (event) => {
    dispatch(setFilter(event.target.value))
  };

  return (
    <SectionPhonebook>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact}/>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={onSetFilter} />
      {isLoaderActive && <Loader />}
      <ContactList contacts={contacts} onDeleteContact={onRemoveContact} />
      <Toaster />
    </SectionPhonebook>);        
 
};

const SectionPhonebook = styled.div`
    width: 400px;
    margin: auto;
    padding: 20px;
    flex-direction: column;
    border: 2px solid darkred;
    border-radius: 10px;
    background-color: rgb(250,240,230);`;


