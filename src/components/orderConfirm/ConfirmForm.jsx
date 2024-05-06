import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./ConfirmForm.module.css";
import Input from "../../shared/formElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validator";
import { useForm } from "../../shared/hooks/useForm";
import Button from "../../shared/UIElements/Button";
import { useHttpRequest } from "../../shared/hooks/send-request";
import Spinner from "../../shared/UIElements/Spinner";

function ConfirmForm() {
  const [inputHandler, formState] = useForm();
  const { sendRequest, isLoading, error } = useHttpRequest();
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const newOrder = {
      name: formState.name.value,
      phone: formState.phone.value,
      street: formState.street.value,
      houseNumber: formState.house.value,
      orderItems: cart,
    };
    sendRequest(
      import.meta.env.VITE_BACKEND_URL + "/api/v1/order",
      "POST",
      undefined,
      newOrder,
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      () => {
        navigate("/order-history");
      }
    );
  };
  return (
    <div className={styles.content}>
      <form onSubmit={submitHandler}>
        {isLoading && <Spinner />}
        <h2>Please enter your address</h2>
        <Input
          id="name"
          element="input"
          type="text"
          label="Name"
          placeholder="Name"
          errorMsg="Please enter a name!"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
        />
        <Input
          id="phone"
          element="input"
          type="tel"
          label="Phone Number"
          placeholder="Phone Number"
          errorMsg="Please enter a phone number!"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
        />
        <div className={styles.address}>
          <Input
            id="street"
            element="input"
            type="text"
            label="Street"
            placeholder="Street"
            errorMsg="Please enter a street!"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
          <Input
            id="house"
            element="input"
            type="number"
            label="House Number"
            placeholder="House Number"
            errorMsg="Please enter a house number!"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
        </div>

        <Button
          className={styles.orderBtn}
          size={"md"}
          disabled={!formState?.isValid || cart.length === 0}
          type={"submit"}
        >
          Confirm your order
        </Button>
      </form>
      {!isLoading && error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default ConfirmForm;
