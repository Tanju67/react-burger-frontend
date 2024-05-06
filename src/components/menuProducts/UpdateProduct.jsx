import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./UpdateProduct.module.css";
import Card from "../../shared/UIElements/Card";
import Input from "../../shared/formElements/Input";
import { useForm } from "../../shared/hooks/useForm";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validator";
import Button from "../../shared/UIElements/Button";
import { useHttpRequest } from "../../shared/hooks/send-request";
import Spinner from "../../shared/UIElements/Spinner";

function UpdateProduct() {
  const [inputHandler, formState] = useForm();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { sendRequest, isLoading, error } = useHttpRequest();

  const submitHandler = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    sendRequest(
      import.meta.env.VITE_BACKEND_URL +
        `/api/v1/productAdmin/${searchParams.get("id")}`,
      "PATCH",
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
        <h2>Update Product</h2>
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
            Update Product
          </Button>
        </form>
      </Card>
      {!isLoading && error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default UpdateProduct;
