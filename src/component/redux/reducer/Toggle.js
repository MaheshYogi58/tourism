// reducers.js

import { TOGGLE_DROPDOWN, TOGGLE_MENU } from '../action/actions';


const initialState = {
  isMenuOpen: false,
  activeDropdown: null,
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    case TOGGLE_DROPDOWN:
      return {
        ...state,
        activeDropdown: state.activeDropdown === action.payload ? null : action.payload,
      };
    default:
      return state;
  }
};

export default navbarReducer 
 