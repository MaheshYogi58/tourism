import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const Contact = createAsyncThunk(
  'contact/submit',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/contact', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
