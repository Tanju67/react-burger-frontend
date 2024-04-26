import React from "react";
import styles from "./ContentHistory.module.css";
import SingleOrder from "./SingleOrder";

const order = [
  {
    id: "o1",
    product: [
      {
        id: "p1",
        totalPrice: 31,
        item: [
          {
            title: "burger",
            quantity: 2,
            price: 10.5,
            extras: [
              { title: "basilikum", price: 0.5, id: "p1" },
              { title: "cheddar", price: 0.5, id: "p2" },
            ],
          },
          {
            title: "chicken",
            quantity: 1,
            price: 8,
            extras: [
              { title: "basilikum", price: 0.5, id: "p1" },
              { title: "cheddar", price: 0.5, id: "p2" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "o2",
    product: [
      {
        id: "p1",
        totalPrice: 11.5,
        item: [
          {
            title: "burger",
            quantity: 2,
            price: 10.5,
            extras: [
              { title: "basilikum", price: 0.5, id: "p1" },
              { title: "cheddar", price: 0.5, id: "p2" },
            ],
          },
        ],
      },
    ],
  },
];
function ContentHistory() {
  return (
    <div>
      {order.map((item) => (
        <SingleOrder key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ContentHistory;
