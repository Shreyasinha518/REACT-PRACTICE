import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FoodInput from "./components/FoodInput";
import Container from "./components/Container";

function App() {
  // let foodItems = [];
  //  let foodItems = ["Dal", "dryfruits", "Green Vegetables", "Milk", "Roti"];
  let [foodItems, setFoodItems, setTextChange] = useState([]);

  /*let textStateArr = useState("FOOD ITEMS ENTERED");
  let textToShow = textStateArr[0];
  let setTextChange = textStateArr[1];
  console.log(`Current value of testState: ${textToShow}`);*/

  /*if (foodItems.length === 0) {
    return <h3>I am still hungry</h3>;
  }*/
  // let emptyValue = foodItems.length === 0 ? <h3>I AM HUNGRY.</h3> : null;

  //let [textToShow, setTextChange] = useState("FOOD ITEMS ENTERED");
  //console.log(`Current value of testState: ${textToShow}`);

  let handleKey = (event) => {
    if (event.key === "Enter") {
      let newFood = event.target.value;
      let newItems = [...foodItems, newFood];
      console.log(`FOOD ENTERED IS : ${newFood}`);
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="Food-Heading">HEALTHY FOOD</h1>
      </Container>
      <Container>
        <FoodInput handleKey={handleKey}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>

        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>THIS IS THE ULTIMATE SAY THAT HEALTH IS WEALTH!!!</Container>*/}
    </>
  );
}

export default App;
