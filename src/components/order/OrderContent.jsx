/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./OrderContent.module.css";
import Card from "../../shared/UIElements/Card";
import Extras from "./Extras";
import Button from "../../shared/UIElements/Button";
import { cartActions } from "../../shared/store/CartSlice";
import { getExtras } from "../../shared/utils/helper";
import { useHttpRequest } from "../../shared/hooks/send-request";
import Spinner from "../../shared/UIElements/Spinner";

function OrderContent({ data }) {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.cart.totalPrice);
  const extras = useSelector((state) => state.cart.product.extras);
  const product = useSelector((state) => state.cart.product);
  const role = useSelector((state) => state.auth.user.role);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { sendRequest, isLoading } = useHttpRequest();
  const navigate = useNavigate();
  const { extrasPrice } = getExtras(extras);
  const totalPrice = +extrasPrice + price;

  const submitHandler = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    sendRequest(
      `http://localhost:5000/api/v1/cart`,
      "POST",
      undefined,
      product,
      {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      () => {
        navigate(0);
      }
    );
  };

  const clickHandler = () => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  };

  useEffect(() => {
    dispatch(
      cartActions.setProduct({
        title: data[0].title,
        price: data[0].price,
        extras: [],
      })
    );
  }, []);

  return (
    <form onSubmit={submitHandler} className={styles.content}>
      <Card className={styles.contentCard}>
        {isLoading && <Spinner />}
        <h2>{data[0].title}</h2>
        <p> {data[0].description} </p>
        {(data[0].menu.title === "Burger" ||
          data[0].menu.title === "Hot Dogs" ||
          data[0].menu.title === "French Fries" ||
          data[0].menu.title === "Wraps") && (
          <Extras title={"Extras"} query={"dips"} />
        )}

        {role !== "admin" && (
          <Button
            type={"submit"}
            className={styles.orderBtn}
            onClick={clickHandler}
            size={"md"}
          >
            + Add to Cart (${totalPrice.toFixed(2)})
          </Button>
        )}
      </Card>
    </form>
  );
}

export default OrderContent;
