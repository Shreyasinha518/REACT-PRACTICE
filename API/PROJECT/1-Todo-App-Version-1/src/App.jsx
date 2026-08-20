import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./Store/TodoItems-store";
import { DefaultContext } from "react-icons";
import TodoItemsContextProvider from "./Store/TodoItems-store";


function App() {
 
  //const defaultTodoItems = [{ name: 'Buy Ghee', dueDate: '1-2-25' }];
  return (
    <TodoItemsContextProvider >       
      <center className="Todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}


export default App;
