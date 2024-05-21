export const OPEN_DETAIL_PAGE = 'OPEN_DETAIL_PAGE';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN';
export const SELECT_COMPONENT = 'SELECT_COMPONENT';
export const SELECT_PLACE = 'SELECT_PLACE';



export const openDetailPage = (itemId) => ({
  type: OPEN_DETAIL_PAGE,
  payload: itemId,
});

export const updateSelectedItemImage = (payload) => ({
  type: 'UPDATE_SELECTED_ITEM_IMAGE',
  payload,
});


export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const toggleDropdown = (id) => ({
  type: TOGGLE_DROPDOWN,
  payload: id,
});

export const selectComponent = (component) => ({
  type: SELECT_COMPONENT,
  payload: component,
});


export const selectPlace = (place) => ({
  type: SELECT_PLACE,
  payload: place,
});

