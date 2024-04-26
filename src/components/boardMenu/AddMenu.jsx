import React from "react";
import styles from "./AddMenu.module.css";
import Input from "../../shared/formElements/Input";
import { useForm } from "../../shared/hooks/useForm";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validator";
import Button from "../../shared/UIElements/Button";
import Card from "../../shared/UIElements/Card";

function AddMenu() {
  const [inputHandler, formState] = useForm();
  return (
    <div className={styles.content}>
      <Card className={styles.formCard}>
        <h2>Add Menu</h2>
        <form>
          <Input
            id="title"
            element="input"
            type="text"
            label="Menu Title"
            placeholder="Menu Title"
            errorMsg="Please enter a menu title!"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
          <Input
            id="image"
            element="input"
            type="file"
            label="Upload Image"
            placeholder="Upload image"
            errorMsg="Please enter a img!"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />

          <Button disabled={!formState?.isValid} size={"md"}>
            Add Menu
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default AddMenu;
