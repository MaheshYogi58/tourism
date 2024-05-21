// reducers/placeTo.js

import { SELECT_PLACE } from "../action/actions";



const initialState = {
  selectedPlace: null,
};

const placeTo = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: action.payload,
      };
    default:
      return state;
  }
};

export default placeTo;
