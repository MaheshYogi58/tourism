import { SELECT_COMPONENT } from "../action/actions";


const initialState = {
  selectedComponent: null,
};

const PlanTrip = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COMPONENT:
      return {
        ...state,
        selectedComponent: action.payload,
      };
    default:
      return state;
  }
};

export default PlanTrip;