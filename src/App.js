import React, {useState} from 'react'

// We can only use hooks inside the function component. Not in class component
//  because class have somthing that do like hooks
// hooks must be execute in the exact same order in every component render
// hooks cannot be put inside if/else clause
export default function App() {
  // destructuring inline
  // first value will be the current state and second value will be function
const [count, setCount]  = useState(4);
// creating function to decrement the count
 function decrementCount(){
   //function version 
   setCount(prevCount => prevCount -1)
 }
//  creating function to increment the count
 function incrementCount(){
   setCount(prevCount =>prevCount +1)
 }

  return (
    <div>
      <button onClick={incrementCount}>+</button>
      <span>{count}</span>
      <button onClick={decrementCount}>-</button>
    </div>
  )
}
