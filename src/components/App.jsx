import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter";

const App = () => {
  // In using redux toolkit we use a react hook called UseSelector as 
  // well as the dispatch mehtod to use the actions
  const {count}= useSelector(state => state.counter); 
  const dispatch = useDispatch();
  
  return (
    <div className="container">
      <h1>Agbesi's Counter </h1>
      <h2>{count}</h2>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(increment())}>+</button>
    </div>
  );
};

export default App;
