import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { fetchContactsOperation, deleteContactOperation, addContactOperation } from './operations';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState : [],
    reducers: {},
    extraReducers: {
        [fetchContactsOperation.fulfilled]: (_, action) => action.payload,
        [deleteContactOperation.fulfilled]: (state, action) => state.filter(contact => contact.id !== action.payload.id),
        [addContactOperation.fulfilled]: (state, action) => [...state, action.payload],
    }
});


const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        addFilter(_, action) {
            return action.payload;
        },
    }
});

const loadingSlice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {},
    extraReducers: {
        [fetchContactsOperation.pending]: () => true,
        [deleteContactOperation.pending]: () => true,
        [addContactOperation.pending]: () => true,
        [fetchContactsOperation.fulfilled]: () => false,
        [deleteContactOperation.fulfilled]: () => false,
        [addContactOperation.fulfilled]: () => false,
        [fetchContactsOperation.rejected]: () => false,
        [deleteContactOperation.rejected]: () => false,
        [addContactOperation.rejected]: () => false,

    }
});

const errorSlice = createSlice({
    name: 'error',
    initialState: null,
    reducers: {},
    extraReducers: {
        [fetchContactsOperation.rejected]: (_, error) => error,
        [deleteContactOperation.rejected]: (_, error) => error,
        [addContactOperation.rejected]: (_, error) => error,
    }
});


export const { addContact, deleteContact } = contactsSlice.actions;
export const { addFilter } = filterSlice.actions;

export const rootReducer = combineReducers({ items: contactsSlice.reducer, isLoading: loadingSlice.reducer, error: errorSlice.reducer, filter: filterSlice.reducer });
