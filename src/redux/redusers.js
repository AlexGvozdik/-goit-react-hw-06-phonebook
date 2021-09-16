// import { createReducer } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import initialContacts from '../data.json';
// import { addContact,  changeFilter, deleteContact } from './actions';

// const initialState = {
//   contacts:
//     JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts,
//   filter: '',
// };


// const contacts = createReducer(initialState.contacts, {
//   [addContact]: (state, { payload }) => [payload, ...state],

//   [deleteContact]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

// const filter = createReducer(initialState.filter, {
//   [changeFilter]: (_, { payload }) => payload,
// });


// const rootReducer = combineReducers({
//   contacts,
//   filter,
// });
// export default rootReducer;

///WITHOUT REDUX TOOLKIT
// import actionTypes from './types';

// const contacts=(initialState.contacts, {type, payload}) => {
//   switch(type) {
// case actionTypes.ADD:
//   return [...state, payload];

//     case actionTypes.DELETE:
//   return state.filter(contact => contact.id !== payload);

//     default:
//     return state;

//   }

// }

// const filter = (initialState.filter, {type, payload}) => {
//     switch (type) {
//       case actionTypes.FILTER:
//         return payload;

//       default:
//         return state;
//     }
// };
