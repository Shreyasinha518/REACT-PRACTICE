//yaha state aur input ke bich me two-way binding hai
import { MdAddComment } from "react-icons/md";
import { useState } from "react";
import { useRef } from "react";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setdueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  /*const handleNameChange = (event) => {
    setTodoName(event.target.value);
    // noOfUpdates.current += 1;
  };*/
  const handleDateChange = (event) => {
    setdueDate(event.target.value);
    console.log(`noOfUpdates are : ${noOfUpdates.current}`);
  };
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    //console.log(`${todoName} and ${dueDate}`);
    onNewItem(todoName, dueDate);
  };

  return (
    <form className="row Kg-row" onSubmit={handleAddButtonClicked}>
      <div className="col-6">
        <input
          type="text"
          ref={todoNameElement}
          placeholder="Enter Todo Here"
          // value={todoName}
          // onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          ref={dueDateElement}
          //value={dueDate}
          //onChange={handleDateChange}
        />
      </div>
      <div className="col-2">
        <button
          // type="button"
          className="btn btn-success Kg-button"
          //onClick={handleAddButtonClicked}
        >
          <MdAddComment />
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
