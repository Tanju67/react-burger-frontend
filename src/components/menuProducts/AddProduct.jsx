import React from "react";
import styles from "./AddProduct.module.css";
import Card from "../../shared/UIElements/Card";
import Input from "../../shared/formElements/Input";
import { useForm } from "../../shared/hooks/useForm";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validator";
import Button from "../../shared/UIElements/Button";

function AddProduct() {
  const [inputHandler, formState] = useForm();
  console.log(formState);
  return (
    <div className={styles.content}>
      <Card className={styles.formCard}>
        <h2>Add Product</h2>
        <form>
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

          <Button disabled={!formState?.isValid} size={"md"}>
            Add Product
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default AddProduct;
