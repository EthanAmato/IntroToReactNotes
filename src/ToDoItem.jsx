import "./App.css";

// In react, we can tell a component that it accepts data from a parent component
// by giving it an object that will spread out possible fields of data such as 'ToDoName'
function ToDoItem({ toDoName }) {
  // Ternary operator:
  // A ternary operator is a quick way in javascript (and a bunch of other languages) to set a variable equal
  // to something if a condition is true and something else if false
  let text = toDoName ? toDoName : "Untitled To Do";

  // We must have a return statement with jsx in it
  return (
    <div className="row gy-3">
      <div className="col-md-8 todo m-auto">
        <div className="row pt-3 text-box m-auto">
          <p className="text">{text}</p>
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
