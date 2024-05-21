import { OPEN_DETAIL_PAGE } from "../action/actions";


const initialState = {
  selectedItem: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DETAIL_PAGE:
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;