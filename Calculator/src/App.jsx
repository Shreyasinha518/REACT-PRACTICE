import { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import BUttonContainer from "./components/ButtonContainer";
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <BUttonContainer onButtonClick={onButtonClick}></BUttonContainer>
    </div>
  );
}

export default App;
