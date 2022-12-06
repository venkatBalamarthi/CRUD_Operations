import {AUTHORS_ACTIONS} from '../Types';

const initialState = {
  authors: [],
  selectedAuthor: {},
};

const authorsReducer = (state = initialState, action) => {
  switch (action?.type) {
    case AUTHORS_ACTIONS.ADD_AUTHOR: {
      const authorId = state?.authors?.length ? state?.authors?.length + 1 : 1;
      const data = {...action?.payload, authorId: authorId};
      const authorsList = state?.authors?.length
        ? [...state?.authors, data]
        : [data];

      return {
        ...state,
        authors: authorsList || [],
      };
    }
    case AUTHORS_ACTIONS.SELECTED_AUTHOR: {
      return {
        ...state,
        selectedAuthor: action?.payload || [],
      };
    }
    case AUTHORS_ACTIONS.ADD_BOOK_DETAILS: {
      const authorsList = state?.authors?.length ? [...state?.authors] : [];
      const findAuthor = authorsList?.find(
        (item, index) => item?.authorId === action?.payload?.authorId,
      );
      if (findAuthor) {
        const findIndex = authorsList?.findIndex(
          (item, index) => item?.authorId === action?.payload?.authorId,
        );
        authorsList[findIndex]?.details.booksDetails?.push(
          action?.payload?.booksDetails,
        );
      }
      return {
        ...state,
        authors: authorsList,
      };
    }
    default:
      return state;
  }
};
export default authorsReducer;
