// This is going to be the file where I define the component
// 'Greeting' it will have some very basic JSX to demonstrate
// how a functional component works in react

// To create a functional componenet in React, we just need to make
// a regular Javascript function:

// The name of our Component in this case is 'Greeting' because that's the name
// of the function
function Greeting() {
  // Create a regular JS variable with a string = "Ethan"
  let myName = "Jayse";

  // Another cool thing we can do with react is store JSX inside of variables:
  let myNameButton = <button>Ethan</button>;

  // This might seem silly at first - why would you need to store HTML-like JSX inside of variables?
  // This is super useful because you are able to then use regular javascript methods/expressions
  // to create custom / more fleshed out JSX components such as using Array methods.

  let myClass = ["Ethan", "Fae", "Jayse"];

  //   let myClassJSX = myClass.map((item, index) => {
  //     return <li key={index}>Hello, {item}</li>;
  //   });

  //   console.log(myClassJSX);

  // We have to have a return statement that contains JSX (that weird
  // HTML-like syntax)
  return (
    <div>
      {/* To render custom text / javascript expressions inside of JSX,
            we can use curly braces with the expression inside of them */}
      <h1>Hello, {myNameButton}</h1>
      {myClass.map((item, index) => {
        return <li key={index}>Hello, {item}</li>;
      })}
    </div>
  );
}

// Calling back to the section on importing and exporting code/functions in JS
// we have to EXPORT our functional component via the 'export' keyword to make
// it accessible in other parts of our project
// The difference between export Greeting and export default Greeting
// is that when we do import Greeting with a default export, it gets
// the specified function. If we don't make it default, we have to
// break it into an object

export default Greeting;
