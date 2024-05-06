/* eslint-disable react/prop-types */
import styles from "./MyCurrentOrder.module.css";
import OrderItem from "./OrderItem";

function MyCurrentOrder({ data }) {
  return (
    <div className={styles.page}>
      {data.length > 0 && (
        <ul>
          {data.map((item) => (
            <OrderItem key={item._id} item={item} />
          ))}
        </ul>
      )}
      {data.length === 0 && (
        <p
          style={{
            textAlign: "center",
            fontSize: "2rem",
            color: "var(--clr-primary-shade)",
          }}
        >
          No order found!
        </p>
      )}
    </div>
  );
}

export default MyCurrentOrder;
