import { useRef } from "react";

export default function FancyInput() {
  // The useRef hook allows our components to hold information that is not
  // used for re-rendering.
  // A common case for this would be a variable that gives direct access to a
  // DOM node for an easy way to access values. You can also use it for
  // non-state values if necessary. Essentially, useRef values will keep
  // track of a piece of data across rerenders but changes in them will NOT
  // rerender a component

  // Let's create a useRef variable - much more straightforward than a useState
  // We're going to use this inputRef to immediately hook onto whatever text
  // is inside of our input element
  const inputRef = useRef();


  const printContentsOfInputRef = () => {
    // Allows us to immediately access the dom node associated with
    // inputRef (our input)
    console.log(inputRef.current)

    // To access the data inside of our input, we can call inputRef.current.value
    console.log(inputRef.current.value)

  }

  return (
    <>
      <h1>Enter any text</h1>

      <input ref={inputRef} />
      <button onClick={printContentsOfInputRef}>Print my input</button>
    </>
  );
}
