import "./App.css";
import { useState } from "react";

// In react, we can tell a component that it accepts data from a parent component
// by giving it an object that will spread out possible fields of data such as 'ToDoName'
function ToDoItem({ toDoName }) {
  // Ternary operator:
  // A ternary operator is a quick way in javascript (and a bunch of other languages) to set a variable equal
  // to something if a condition is true and something else if false
  let text = toDoName ? toDoName : "Untitled To Do";

  // We want each and every one of our ToDoItem component instances
  // to keep track of its own individual state of whether or not it's
  // completed
  const [isCompleted, setIsCompleted] = useState(false);

  // We must have a return statement with jsx in it
  return (
    <div className="row gy-3">
      <div
        onClick={() => setIsCompleted(!isCompleted)}
        style={isCompleted ? {backgroundColor: "gray"} : {}}
        className="col-md-8 todo m-auto"
      >
        <div className="row pt-3 text-box m-auto">
          {/* What if we wanted to conditionally add the 
            text-decoration: line-through property to an element
            in our component based on a state in the component?
            We can use the style attribute in React to do this:
            
            1. Looks like this: style={{camelCaseCSSProperties: "value"}}
            Essentially, the style attribute takes in a Javascript object as 
            a value where each of the properties are camel-cased versions of CSS
            properties.
            */}
          <p style={isCompleted ? {textDecoration: "line-through"} : {}} className="text">
            {text}
          </p>
        </div>
        <div className="row">
          <div className="col-md-2 p-0">
            <button className="btn btn-danger w-75 px-0 m-0 my-1">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
