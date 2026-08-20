import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomMessage";
function App() {
  const initialTodoItems = [];
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const handleNewItem = (itemName, itemDueDate) => {   //function set hua hai to pass values taki pura kaam yeh function kar de aur har jagah buss value hi pass ho
    // console.log(`New item added: ${itemName} Date : ${itemDueDate}`);
    
    setTodoItems(//newTodoItems
    (currValue)=>[...currValue,
      { name: itemName, dueDate: itemDueDate },  //agar pre-existing elemens me extra add karna ho to use this
    ]);
  };
  const handleDeleteItem = (todoItemName) => {
    //console.log(`item deleted ${todoItemName}`);
    let newTodoItems = todoItems.filter((item) => item.name !== todoItemName);   //pre-existing se kuch delete karna ho to use filter
    setTodoItems(newTodoItems);
  };
  return (
    <center className="Todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDelete={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
