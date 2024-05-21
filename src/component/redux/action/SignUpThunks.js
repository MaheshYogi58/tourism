


import { Signupuser } from '../services/AuthService';
import { signupFailure, signupRequest, signupSuccess } from './SignupActions';



export const Signup = (username, newpassword,email,conformpassword) => async (dispatch) => {
  dispatch(signupRequest());
  try {
    const user = await Signupuser(username, newpassword,email,conformpassword);
    dispatch(signupSuccess(user));
  } catch (error) {
    dispatch(signupFailure(error.message));
  }
};
