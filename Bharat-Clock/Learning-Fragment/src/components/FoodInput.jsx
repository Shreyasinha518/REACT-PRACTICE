import styles from "./FoodInput.module.css";
let FoodInput = ({ handleKey }) => {
  return (
    <input
      type="text"
      placeholder="Enter food items"
      className={styles.foodInput}
     //onChange={handleItems}
      onKeyDown={handleKey}
    ></input>
  );
};
export default FoodInput;
