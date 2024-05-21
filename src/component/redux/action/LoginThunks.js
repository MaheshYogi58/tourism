import axios from "axios";
import { loginRequest, loginSuccess, loginFailure } from './LoginActions';
import { loginUser } from '../services/AuthService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd'; 

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { dispatch }) => {
    dispatch(loginRequest());
    try {
      // Perform login
      const user = await loginUser(username, password);
      dispatch(loginSuccess(user));

      // Perform API call
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        'https://fakestoreapi.com/auth/login',
        { username, password },
        config
      );

      notification.success({
        message: "Success",
        description: "Welcome",
      });

      return response.data;
    } catch (error) {
      dispatch(loginFailure(error.message));
      notification.error({
        message: "Error",
        description: error.message,
      });
      throw error;
    }
  }
);
