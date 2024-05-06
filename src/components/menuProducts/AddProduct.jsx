import { useNavigate, useParams } from "react-router-dom";
import styles from "./AddProduct.module.css";
import Card from "../../shared/UIElements/Card";
import Input from "../../shared/formElements/Input";
import { useForm } from "../../shared/hooks/useForm";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validator";
import Button from "../../shared/UIElements/Button";
import { useHttpRequest } from "../../shared/hooks/send-request";
import Spinner from "../../shared/UIElements/Spinner";

function AddProduct() {
  const [inputHandler, formState] = useForm();
  const productId = useParams().id;
  const navigate = useNavigate();

  const { sendRequest, isLoading, error } = useHttpRequest();

  const submitHandler = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    sendRequest(
      `http://localhost:5000/api/v1/productAdmin/${productId}`,
      "POST",
      undefined,
      {
        title: formState.title.value,
        description: formState.description.value,
        price: +formState.price.value,
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
    <div className={styles.content}>
      <Card className={styles.formCard}>
        {isLoading && !error && <Spinner />}
        <h2>Add Product</h2>
        <form onSubmit={submitHandler}>
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            placeholder="Title"
            errorMsg="Please enter a title!"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
          <Input
            id="price"
            element="input"
            type="number"
            label="Price"
            placeholder="Price"
            errorMsg="Please enter a price!"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
          <Input
            id="description"
            element="textarea"
            type="text"
            label="Description"
            errorMsg="Please enter a description!"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />

          <Button type={"submit"} disabled={!formState?.isValid} size={"md"}>
            Add Product
          </Button>
        </form>
      </Card>
      {!isLoading && error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default AddProduct;
