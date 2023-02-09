import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadHomeData = createAsyncThunk (
  'home/fetchReadHomeData',
  async (_, {rejectWithValue}) => {
    try {
      const options = {
        method: 'GET',
        url:'/products'

      };
      const {data} = await axiosInstance(options);
      console.log(data)
      return data ?? [];
    } catch (error) {
      return rejectWithValue(error);
    }
    
  }
);