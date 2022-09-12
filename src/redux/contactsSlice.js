import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://631f31a858a1c0fe9f62d31c.mockapi.io',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;
