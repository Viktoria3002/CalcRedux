import React from 'react';
import { useDispatch } from 'react-redux';

const InputNumber = ({ value, setInput }) => {
  const dispatch = useDispatch();
  return <input value={value} type="number" onChange={(e) => dispatch(setInput(e.target.value))} />;
};

export default InputNumber;
