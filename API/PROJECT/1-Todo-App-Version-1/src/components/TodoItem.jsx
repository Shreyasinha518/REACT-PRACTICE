import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../Store/TodoItems-store";
import { useContext } from "react";
function TodoItem({ todoDate, todoName}) {
  const {deleteItem}=useContext(TodoItemsContext);
  return (
    <div className="row Kg-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger Kg-button"
          onClick={() => deleteItem(todoName)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
