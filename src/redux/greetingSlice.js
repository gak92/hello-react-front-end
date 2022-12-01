import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Action Type
const RANDOM_GREETING = 'greetings/random_greeting';
const REQUESTED_URL = 'http://127.0.0.1:3000/api/v1/random_greeting';

// Action Creator
export const getGreeting = createAsyncThunk(
  RANDOM_GREETING,
  async () => {
    const response = await axios.get(REQUESTED_URL);
    return response.data.message;
  },
);

const initialState = {
  greeting: '',
};

// Reducer using Slice
export const greetingSlice = createSlice({
  name: "greeting",
  initialState,
  reducers: {},
  extraReducers: {
    [getGreeting.fulfilled] : (state, action) => ({
      ...state,
      greeting: action.payload,
    }),
  },
});

export default greetingSlice.reducer;
