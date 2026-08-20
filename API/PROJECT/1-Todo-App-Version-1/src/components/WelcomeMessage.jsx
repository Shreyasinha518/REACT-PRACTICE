import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../Store/TodoItems-store";
const WelcomeMessage = () => {
   const {todoItems}=useContext(TodoItemsContext);
  return todoItems.length === 0 && <p className={styles.welcome}>Add Your Todo List</p>;
};
export default WelcomeMessage;
