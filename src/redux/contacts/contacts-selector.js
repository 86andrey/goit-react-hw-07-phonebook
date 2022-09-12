export const getContact = store => store.contacts;

export const getFilterContact = ({ items = [], filter }) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
