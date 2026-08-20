import styles from "./Item.module.css";
const Item = ({ foodItem, bought, buyingItems }) => {
  return (
    <li className={`list-group-item ${bought && "active"} `}>
      <span className={styles["Kg-span"]}>{foodItem}</span>
      <button className={`${styles.button} btn btn-info`} onClick={buyingItems}>
        BUY
      </button>
    </li>
  );
};
export default Item;
