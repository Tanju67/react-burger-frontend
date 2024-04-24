import React from "react";
import styles from "./ConfirmForm.module.css";
import Input from "../../shared/formElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validator";
import { useForm } from "../../shared/hooks/useForm";
import Button from "../../shared/UIElements/Button";

function ConfirmForm() {
  const [inputHandler, formState] = useForm();
  console.log(formState);
  return (
    <div className={styles.content}>
      <form>
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

        <Input
          id="email"
          element="input"
          type="email"
          label="Email"
          placeholder="Email"
          errorMsg="Please enter a valid email!"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
        />
        <Button
          className={styles.orderBtn}
          size={"md"}
          disabled={!formState?.isValid}
          type={"submit"}
        >
          Confirm your order
        </Button>
      </form>
    </div>
  );
}

export default ConfirmForm;
