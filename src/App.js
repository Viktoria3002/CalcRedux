import { useSelector } from 'react-redux';

import Action from './components/Action';
import InputNumber from './components/Input';
import { setFirstInputValue, setSecondInputValue } from './redux/slices/calculator';

import './App.css';
function App() {
  const inputFirstValue = useSelector((state) => state.calculator.firstValue);
  const inputSecondValue = useSelector((state) => state.calculator.secondValue);

  const answer = useSelector((state) => state.calculator.answer);

  return (
    <div className="App">
      <InputNumber value={inputFirstValue} setInput={setFirstInputValue} />
      <Action />
      <InputNumber value={inputSecondValue} setInput={setSecondInputValue} />
      {answer}
    </div>
  );
}

export default App;
