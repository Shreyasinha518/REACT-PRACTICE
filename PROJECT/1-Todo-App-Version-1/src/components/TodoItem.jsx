import { MdDelete } from "react-icons/md";
function TodoItem({ todoDate, todoName, onDelete }) {
  return (
    <div className="row Kg-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger Kg-button"
          onClick={() => onDelete(todoName)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
