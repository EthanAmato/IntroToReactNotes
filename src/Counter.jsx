// Let's import the hook for creating a state variable in React from
// the react library
// Only imports the 'useState' hook/method from the React library
import { useState } from "react";

function Counter() {
  // This is just a Javascript variable - it is NOT a piece of state
  // changes in this variable will NOT affect the DOM / rerender this COunter
  // component
  let countNoState = 0;

  // To create a piece of state inside of our component, we need to use
  // something called a 'React Hook' -> specifically the 'hook' / method
  // we need to call is named useState (all react hooks begin with the
  // lowercase word 'use')

  // To create a state variable in a react project, we are going to use
  // a syntax that is a bit unfamiliar. 
  
  // The first variable in the array is the name of our state variable
  // The second variable in the array is the name of a callback function that
  // we MUST USE to change the value of our state variable. This function will typically
  // follow the naming convention of set+the name of your state (camel-cased)

  // Lastly we set this array equal to the method useState() where whatever we put
  // inside of the parentheses will be the default value of our state variable (count
  // in this case)
  const [count, setCount] = useState(0)



  const handleIncrementNoState = () => {
    countNoState++;
    console.log(countNoState);
  };
  const handleIncrementState = () => {
    // To change the value of a state variable
    // we MUST call the associated callback (setCount) for our state
    // and inside, we can give it a new value for our state. When we do this,
    // we explicitly tell react to rerender this component with the new value
    // of our state
    setCount(count+1)
};

  return (
    <>
      <h1>No State: {countNoState}</h1>
      <h1>State: {count}</h1>
      {/* Add an event listener to a JSX element using
      camelcase on+Event type */}
      <button onClick={handleIncrementNoState}>Increment No State</button>
      <button onClick={handleIncrementState}>Increment With State</button>
    </>
  );
}

export default Counter;
