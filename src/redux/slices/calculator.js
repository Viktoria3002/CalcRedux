import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstValue: 0,
  secondValue: 0,
  answer: 0,
};

export const calculator = createSlice({
  name: 'calculator',
  initialState: initialState,
  reducers: {
    plus: (state) => {
      state.answer = parseInt(state.firstValue) + parseInt(state.secondValue);
    },
    minus: (state) => {
      state.answer = parseInt(state.firstValue) - parseInt(state.secondValue);
    },
    divide: (state) => {
      state.answer = parseInt(state.firstValue) / parseInt(state.secondValue);
    },
    multiply: (state) => {
      state.answer = parseInt(state.firstValue) * parseInt(state.secondValue);
    },
    setFirstInputValue: (state, action) => {
      state.firstValue = action.payload;
    },
    setSecondInputValue: (state, action) => {
      state.secondValue = action.payload;
    },
  },
});

export const { multiply, divide, minus, plus, setFirstInputValue, setSecondInputValue } =
  calculator.actions;
export default calculator.reducer;
