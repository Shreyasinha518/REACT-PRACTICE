import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../Store/TodoItems-store";
import { useContext } from "react";
const TodoItems = () => {
  //const TodoItems=()=>{
 // const contextObj=useContext(TodoItemsContext);
  //  const todoItems=contextObj.todoItems;
  const {todoItems}=useContext(TodoItemsContext);
  console.log(todoItems);
  
  return (
    <>
      <div className={styles.todoContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
            
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
