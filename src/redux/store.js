import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsSlice from './contacts/contacts-slice';
import { filterSlice } from './filter/filter-slice';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
