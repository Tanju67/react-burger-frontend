/* eslint-disable react/prop-types */
import styles from "./OrderItem.module.css";
import Product from "./Product";
import { calculateTotalPrice, formatDate } from "../../shared/utils/helper";

function OrderItem({ item }) {
  return (
    <li className={styles.item}>
      <div>
        <p className={styles.date}>
          <span>Order Date:</span>
          <span>{formatDate(item.createdAt)}</span>
        </p>
        <p className={styles.status}>
          <span>Order Situation:</span>
          <span>{item.status}</span>
        </p>
      </div>
      <div className={styles.product}>
        <h3 className={styles.title}>Ordered Products</h3>
        {item.orderItems.map((p) => (
          <Product key={p._id} item={p} />
        ))}
        <h3 className={styles.total}>
          <span>Total Price</span>
          <span>${calculateTotalPrice(item.orderItems).toFixed(2)}</span>
        </h3>
      </div>
    </li>
  );
}

export default OrderItem;
