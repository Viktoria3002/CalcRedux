import React from 'react';
import { useDispatch } from 'react-redux';
import { plus, divide, multiply, minus } from '../../redux/slices/calculator';

const Action = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(plus())}>+</button>
      <button onClick={() => dispatch(minus())}>-</button>
      <button onClick={() => dispatch(multiply())}>*</button>
      <button onClick={() => dispatch(divide())}>:</button>
    </div>
  );
};

export default Action;
