import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    // filterContacts(state, { payload }) {
    //   return (state = payload);
    // },
    filterContacts(_, { payload }) {
      return payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
