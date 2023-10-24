import { useEffect, useState } from "react";

export default function DataFetcher() {
  const [data, setData] = useState();

  // useEffect lets handle operations that interact with events
  // or elements outside of the component they are in. These are called 'side effects'
  // Examples of this could be changing the color of the body of our html (because
  // the body technically exists outside of our react app)
  // Other examples include calling APIs - the server / data exists outside
  // of our project entirely and therefore useEffect can help us render it
  // properly

  // To create a useEffect that renders data from an API, we must follow this syntax:

  // Written like a regular function call, but it takes 2 parameters as input:
  // The first input argument is a callback that will run once upon the first
  // render of a component or upon a change in a value in the dependency array.
  // The second argument is a 'dependency array' which you can leave blank
  // or fill with state variables. Whenever there is a change in state and that
  // state variable is inside of the dependency array, React will rerun the
  // callback. If the dependency array is empty, we will only call the callback
  // upon first render
  useEffect(() => {
    console.log("First render");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  // Conditionally render using an if statement so that 
  // we actually have something to show the user while waiting for a 
  // response 
  if(!data) {
    return(
        <p>Loading...</p>
    )
  }

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.userId}</p>
    </>
  );
}
