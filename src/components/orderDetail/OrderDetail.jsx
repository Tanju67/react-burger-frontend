/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OrderDetail.module.css";
import Product from "./Product";
import { calculateTotalPrice, formatDate } from "../../shared/utils/helper";
import Button from "../../shared/UIElements/Button";
import { useHttpRequest } from "../../shared/hooks/send-request";
import Spinner from "../../shared/UIElements/Spinner";

function OrderDetail({ data }) {
  const [status, setStatus] = useState("");
  const { sendRequest, isLoading } = useHttpRequest();
  const navigate = useNavigate();
  const address = data.street + " " + data.houseNumber;

  const submitHandler = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    sendRequest(
      import.meta.env.VITE_BACKEND_URL +
        `/api/v1/order/admin/updateOrder/${data._id}`,
      "PATCH",
      undefined,
      {
        status: status,
      },
      {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      () => {
        navigate(0);
      }
    );
  };

  return (
    <div className={styles.page}>
      <div className={styles.order}>
        <div className={styles.info}>
          <p>
            <span>Customer Name:</span>
            <span>{data.name}</span>
          </p>
          <p>
            <span>Order Date:</span>
            <span>{formatDate(data.createdAt)}</span>
          </p>
          <p>
            <span>Address:</span>
            <span>{address}</span>
          </p>
          <p>
            <span>Phone Number:</span>
            <span>{data.phone}</span>
          </p>
          <p>
            <span>Order Status:</span>
            <span>{data.status}</span>
          </p>
        </div>
        <div className={styles.product}>
          <h3 className={styles.title}>Ordered Products</h3>
          <ul>
            {data.orderItems.map((item) => (
              <Product key={item._id} item={item} />
            ))}
          </ul>

          <h3 className={styles.total}>
            <span>Total Price</span>
            <span>${calculateTotalPrice(data.orderItems).toFixed(2)}</span>
          </h3>
        </div>
      </div>
      {data.status !== "delivered" && (
        <form onSubmit={submitHandler}>
          {isLoading && <Spinner />}
          <h3>Update Order Status</h3>
          <div className={styles.formControl}>
            <select
              onChange={(e) => setStatus(e.target.value)}
              name="status"
              id="status"
            >
              <option value="">Select order status</option>
              <option value="on the way">on the way</option>
              <option value="delivered">delivered</option>
            </select>
          </div>
          <Button type={"submit"} size={"sm"} disabled={!status}>
            Update Status
          </Button>
        </form>
      )}
    </div>
  );
}

export default OrderDetail;
