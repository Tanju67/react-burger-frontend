import React from "react";
import styles from "./Extras.module.css";
import ExtrasItem from "./ExtrasItem";

const extras = [
  { id: "e1", title: "cheddar", price: 0.5 },
  { id: "e2", title: "basilikum", price: 0.5 },
  { id: "e3", title: "domates", price: 0.5 },
  { id: "e4", title: "salatalik", price: 0.5 },
  { id: "e5", title: "yumurta", price: 0.5 },
  { id: "e6", title: "cheddar", price: 0.5 },
  { id: "e7", title: "cheddar", price: 0.5 },
  { id: "e8", title: "cheddar", price: 0.5 },
  { id: "e9", title: "cheddar", price: 0.5 },
  { id: "e10", title: "cheddar", price: 0.5 },
];

function Extras({ title }) {
  return (
    <div>
      <h3>{title}</h3>
      {extras.map((item) => (
        <ExtrasItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Extras;
