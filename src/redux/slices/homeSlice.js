import { createSlice } from '@reduxjs/toolkit';
import { fetchReadHomeData } from '../thunks/homeThunk';

const initialState = {
  loading: false,
  error: {},
  homeData: [],
};

export const homeSlice = createSlice ({
  name: 'home',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchReadHomeData.pending, (state) =>{
      state.loading = true;
    });
        builder.addCase(fetchReadHomeData.fulfilled, (state, {payload}) =>{
      state.loading = false;
      state.error = {};
      state.homeData = payload;
    });
        builder.addCase(fetchReadHomeData.rejected, (state, {payload}) =>{
      state.loading = false;
      state.error = payload;
      state.homeData = [];
    });
  }
});

export default homeSlice.reducer;