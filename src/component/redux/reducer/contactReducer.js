import { createSlice } from '@reduxjs/toolkit';
import { Contact } from '../action/querieThunk';


const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    loading: false,
    error: null,
    success: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(Contact.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(Contact.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(Contact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactSlice.reducer;
