import { SEARCH_ON } from "../Actions";

const initialState = {
  searchValue: "",
  searchArray: null,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ON:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};
