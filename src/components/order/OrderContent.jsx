import React, { useEffect } from "react";
import styles from "./OrderContent.module.css";
import Card from "../../shared/UIElements/Card";
import Extras from "./Extras";
import Button from "../../shared/UIElements/Button";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../shared/store/CartSlice";
import { getExtras } from "../../shared/utils/helper";

function OrderContent({ product }) {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.cart.totalPrice);
  const extras = useSelector((state) => state.cart.product.extras);
  const { extrasPrice } = getExtras(extras);
  const totalPrice = +extrasPrice + price;

  const clickHandler = () => {
    dispatch(cartActions.addProductToCart());
    dispatch(cartActions.setTotalPrice(totalPrice));
  };
  useEffect(() => {
    dispatch(
      cartActions.setProduct({
        title: product.title,
        quantity: 1,
        price: product.price,
        extras: [],
      })
    );
  }, []);
  return (
    <form className={styles.content}>
      <Card className={styles.contentCard}>
        <h2>{product.title}</h2>
        <p> {product.description} </p>
        <Extras title={"Extras"} />
        <Button
          type={"button"}
          onClick={clickHandler}
          className={styles.orderBtn}
          size={"md"}
        >
          + Add to Cart (${totalPrice.toFixed(2)})
        </Button>
      </Card>
    </form>
  );
}

export default OrderContent;
