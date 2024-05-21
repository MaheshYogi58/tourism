import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/auth';

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const Signupuser = async (username, newpassword, email, conformpassword) => {
  try {
    const response = await axios.post(`${BASE_URL}/SignUp`, { username, newpassword, email, conformpassword });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
