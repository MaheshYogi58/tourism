// reducers/loginReducer.js

import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../action/SignupActions";








const initialState = {
    user: null,
    loading: false,
    error: null,
  };
  
  const SignUpReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNUP_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          user: action.payload,
          loading: false,
          error: null,
        };
      case  SIGNUP_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default SignUpReducer;