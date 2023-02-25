import { SEARCH_ARRAY, SEARCH_ON } from "../Actions";

const initialState = {
  searchValue: "",
  searchArray: null,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ON:
      return { ...state, searchValue: action.payload };
    case SEARCH_ARRAY:
      return { ...state, searchArray: action.payload };
    default:
      return state;
  }
};
