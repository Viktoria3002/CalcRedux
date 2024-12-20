import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './slices/calculator.js';

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});
