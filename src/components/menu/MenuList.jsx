/* eslint-disable react/prop-types */
import styles from "./MenuList.module.css";
import ListItem from "./ListItem";

function MenuList({ data }) {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <ListItem key={item._id} item={item} />
      ))}
    </ul>
  );
}

export default MenuList;
