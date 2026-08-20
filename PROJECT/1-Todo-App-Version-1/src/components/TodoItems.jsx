import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, onDelete }) => {
  return (
    <>
      <div className={styles.todoContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
            onDelete={onDelete}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
