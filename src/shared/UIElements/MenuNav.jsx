/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import styles from "./MenuNav.module.css";

function MenuNav({ title, cart = true }) {
  const cartLength = useSelector((state) => state.cart.cart).length;
  const navigate = useNavigate();

  const clickHandler = () => {
    if (cartLength > 0) {
      navigate("/menu/confirm");
    }
  };

  return (
    <nav className={styles.nav}>
      <Link to={".."}>
        <IoArrowBackOutline />
      </Link>
      <h2>{title}</h2>
      {cart && (
        <div className={styles.cartIcon} onClick={clickHandler}>
          <FaCartPlus />
          <span>{cartLength}</span>
        </div>
      )}
    </nav>
  );
}

export default MenuNav;
