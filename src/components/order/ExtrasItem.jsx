import React, { useEffect, useState } from "react";
import styles from "./ExtrasItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../shared/store/CartSlice";

function ExtrasItem({ item }) {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();
  const clickHandler = () => {
    setChecked((prev) => !prev);
    if (!checked) {
      dispatch(
        cartActions.setExtras({
          id: item._id,
          title: item.title,
          price: item.price,
        })
      );
    } else {
      dispatch(cartActions.deleteExtras(item._id));
    }
  };

  return (
    <div onClick={clickHandler} className={styles.item}>
      <div className={styles.inputBox}>
        <input
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          type="checkbox"
        />
        <span>{item.title}</span>
      </div>
      <div className={styles.priceBox}>
        <span>+ ${item.price.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default ExtrasItem;
