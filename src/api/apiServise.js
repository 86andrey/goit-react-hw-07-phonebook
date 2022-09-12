import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://631f31a858a1c0fe9f62d31c.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  // console.log(data);
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data: result } = await instance.delete(`/${id}`);
  return result;
};
