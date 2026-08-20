import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [], //empty array
  addNewItem: () => {}, //empty function

  deleteItem: () => {},
});
const todoItemReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];

    //agar pre-existing elemens me extra add karna ho to use this
  } else if (action.type === "DELETE_ITEM") {
    //newTodoItems= (todoItemName) => {
    //console.log(`item deleted ${todoItemName}`);
    newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    ); //pre-existing se kuch delete karna ho to use filter
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  //children passed as prop
  const initialTodoItems = [];
  // const [todoItems, setTodoItems] = useState(initialTodoItems);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    //function set hua hai to pass values taki pura kaam yeh function kar de aur har jagah buss value hi pass ho
    // console.log(`New item added: ${itemName} Date : ${itemDueDate}`);

    dispatchTodoItems(newItemAction);
    //newTodoItems
    //(currValue) => [
    // ...currValue,
    //{ name: itemName, dueDate: itemDueDate }, //agar pre-existing elemens me extra add karna ho to use this
    //]
  };
  const deleteItem = (todoItemName) => {
    const deletItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deletItemAction);
  };
  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
