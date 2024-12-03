// src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './Redux/actions/counterActions';

function App() {
  const counter = useSelector((state) => state.counter.counter); // Subscribe to counter value from Redux state
  const dispatch = useDispatch(); // Dispatch method to trigger actions

  return (
    <div className="App">
      <h1>Redux Counter App</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
