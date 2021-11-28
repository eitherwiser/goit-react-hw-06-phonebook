import { combineReducers } from 'redux';
import types from './contacts-constants';

const def = [
  { id: '3145q6', name: 'Bill Gatevich', number: '044242424600' },
  { id: '4531q6', name: 'Mark Cukerman', number: '062746004242' },
  { id: '3131q6', name: 'Linus Torvaldsiuk', number: '057242424600' },
  { id: 'q53143', name: 'Jeff Bezenko', number: '064723004242' },
];

const initialState = () => {
  if (!window.localStorage.getItem('contacts')) {
    window.localStorage.setItem('contacts', JSON.stringify(def));
  }
  return JSON.parse(window.localStorage.getItem('contacts'));
};
//

const items = (state = initialState(), action) => {
  let newState = [];
  const safeContactsToLocal = () =>
    window.localStorage.setItem('contacts', JSON.stringify(newState));
  switch (action.type) {
    case types.ADD_CONTACT:
      newState = [...state, action.payload];
      safeContactsToLocal();
      return newState;

    case types.DELETE_CONTACT:
      newState = state.filter(({ id }) => id !== action.payload);
      safeContactsToLocal();
      console.log(newState);
      return newState;

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;
