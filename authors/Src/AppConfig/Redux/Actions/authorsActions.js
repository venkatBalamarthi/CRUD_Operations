import {AUTHORS_ACTIONS} from '../Types';

export const addAuthorData = data => {
  return {
    type: AUTHORS_ACTIONS.ADD_AUTHOR,
    payload: data,
  };
};
export const setSelectedAuthor = data => {
  return {
    type: AUTHORS_ACTIONS.SELECTED_AUTHOR,
    payload: data,
  };
};
export const addBookDetails = data => {
  return {
    type: AUTHORS_ACTIONS.ADD_BOOK_DETAILS,
    payload: data,
  };
};
