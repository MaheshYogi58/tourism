

const initialState = null;

const selectedItemImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_ITEM_IMAGE':
      return action.payload;
    default:
      return state;
  }
};

export default selectedItemImageReducer;
