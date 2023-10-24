import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Greeting from "./Greeting";
import ToDoItem from "./ToDoItem";
// Let's import bootstrap into our App.jsx component
// To do that we need to import the path to the css file inside of the bootstrap package that we installed before:
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Counter from "./Counter";
import FancyInput from "./FancyInput";
import DataFetcher from "./DataFetcher";

import { useState, useRef } from "react";
import KeysExample from "./KeysExample";

function App() {

  const [toDoItems, setToDoItems] = useState([])
  const inputRef = useRef();

  const handleAdd = () => {

    const currentInputText = inputRef.current.value || undefined
    // Add a new element to our toDoItems array using spread operator
    setToDoItems([...toDoItems, {text: currentInputText, id: Date.now()}])
    
    // Can 'clear out' the input so that the user can put in a new todo
    inputRef.current.value = ""
  }

  // This is one way on how you handle delete with arrays
  // Just filter out a single item via some unique identifier like ID
  const handleDelete = (id) => {
    setToDoItems(
      toDoItems.filter((toDo) => {
        return toDo.id !== id;
      })
    )
  }


  return (
    <>
      {/* We are going to create something called a 'functional component'
      in react. This is how we can create 'custom html tags' using this fancy
      JSX syntax for reusable UI building blocks */}
      {/* <Greeting />
      <Greeting />
      <Greeting /> */}

      {/* Each instance of a component has its own set of state variables
      meaning that they are able to operate independently from one another */}
      {/* <Counter/>
      <Counter/>
      <Counter/> */}

      {/* useRef Example component */}
      {/* <FancyInput/>
      <FancyInput/>
      <FancyInput/>
      <FancyInput/> */}

      {/* useEffect Example*/}
      {/* <DataFetcher/> */}


      {/* Why keys are important: */}
      {/* <KeysExample/> */}
      <div className="container board mt-3">
        <div className="row text-center">
          <h1>To Do List:</h1>
          <p>Click 'Add' to add a new to do and click a todo to cross it off</p>
          <div className="row justify-content-center text-center">
            {/* Put to dos in here eventually */}
            {/* <ToDoItem toDoName={"Walk the dog"} /> */}
            {
              // A key is crucial for helping react understand which
              // items in an array has changed, were added, or were removed
              toDoItems.map((item) => {
                console.log(item)
                return(
                  <ToDoItem deleteTodo={() => handleDelete(item.id)}  toDoName={item.text} key={item.id}/>
                )
              })
            }
          </div>
          <div className="row mt-3 d-flex justify-content-center">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <input
                  ref={inputRef}
                  type="text"
                  className="form-control"
                  placeholder="Write ToDo Task here..."
                  aria-label="ToDoInput"
                />
                <div className="input-group-append">
                  <button onClick={handleAdd} className="btn btn-primary h-100 m-0" type="button">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
