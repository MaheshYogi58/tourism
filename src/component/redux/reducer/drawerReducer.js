// drawerReducer.js

import { CLOSE_DRAWER, OPEN_DRAWER } from "../action/drawerActions";


const initialState = {
  isOpen: false,
};

const drawerReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_DRAWER:
          return {
            ...state,
            isOpen: true,
          };
        case CLOSE_DRAWER:
          return {
            ...state,
            isOpen: false,
          };
        default:
          return state;
      }
};

export default drawerReducer; // Export the reducer as default
