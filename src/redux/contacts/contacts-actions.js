import types from './contacts-constants.js';

const addContact = contact => ({
  type: types.ADD_CONTACT,
  payload: contact,
});

const deleteContact = id => ({
  type: types.DELETE_CONTACT,
  payload: id,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export { addContact, deleteContact, changeFilter };
