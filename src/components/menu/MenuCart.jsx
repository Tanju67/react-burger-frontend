/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./MenuCart.module.css";
import Card from "../../shared/UIElements/Card";
import CartItem from "./CartItem";
import Button from "../../shared/UIElements/Button";
import { useHttpRequest } from "../../shared/hooks/send-request";
import { calculateTotalPrice } from "../../shared/utils/helper";
import { cartActions } from "../../shared/store/CartSlice";
import Spinner from "../../shared/UIElements/Spinner";

function MenuCart({ orderBtn = true, confirm = false }) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sendRequest, isLoading } = useHttpRequest();
  const clickHandler = () => {
    navigate("/menu/confirm");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    sendRequest(
      import.meta.env.VITE_BACKEND_URL + `/api/v1/cart`,
      "GET",
      undefined,
      undefined,
      {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      (data) => {
        dispatch(cartActions.setCart(data));
      }
    );
  }, []);
  return (
    <div
      className={`${styles.cartSection} ${confirm ? styles.confirmCart : ""}`}
    >
      <Card className={styles.cart}>
        {isLoading && <Spinner />}
        <h2>Cart</h2>

        {cart.length > 0 &&
          cart.map((item, i) => <CartItem key={i} item={item} />)}
        {cart.length > 0 && (
          <p className={styles.total}>
            <strong>Total Price</strong>{" "}
            <span>${calculateTotalPrice(cart).toFixed(2)}</span>
          </p>
        )}
        {cart.length === 0 && <p>No product in your cart.</p>}
      </Card>
      {orderBtn && (
        <Button
          onClick={clickHandler}
          rounded={true}
          size={"md"}
          disabled={cart.length === 0}
        >
          Go to Order Now
        </Button>
      )}
    </div>
  );
}

export default MenuCart;
