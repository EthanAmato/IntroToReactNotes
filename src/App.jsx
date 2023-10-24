import { useState } from "react";
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

function App() {
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
      <DataFetcher/>

      <div className="container board mt-3">
        <div className="row text-center">
          <h1>To Do List:</h1>
          <p>Click 'Add' to add a new to do and click a todo to cross it off</p>
          <div className="row justify-content-center text-center">
            {/* Put to dos in here eventually */}
            <ToDoItem toDoName={"Walk the dog"} />
            <ToDoItem toDoName={"Wash the dishes"}/>
            <ToDoItem toDoName={"Do Laundry"}/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
          </div>
          <div className="row mt-3 d-flex justify-content-center">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write ToDo Task here..."
                  aria-label="ToDoInput"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary h-100 m-0" type="button">
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
