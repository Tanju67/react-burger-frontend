import React from "react";
import styles from "./Register.module.css";
import MenuLayout from "../../shared/UIElements/MenuLayout";
import { useForm } from "../../shared/hooks/useForm";
import Card from "../../shared/UIElements/Card";
import Input from "../../shared/formElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MIN,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validator";
import Button from "../../shared/UIElements/Button";
import { Link } from "react-router-dom";

function Register() {
  const [inputHandler, formState] = useForm();
  return (
    <MenuLayout title={"Register"} sidebar={false}>
      <div className={styles.content}>
        <Card className={styles.formCard}>
          <h2>Register</h2>
          <form>
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
              id="email"
              element="input"
              type="email"
              label="Email"
              placeholder="Email"
              errorMsg="Please enter a valid email!"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
            />
            <Input
              id="password"
              element="input"
              type="password"
              label="Password"
              placeholder="Password"
              errorMsg="Please enter a password!"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(6)]}
            />

            <Button disabled={!formState?.isValid} size={"md"}>
              Register
            </Button>
            <p>
              Do you have already an account?
              <Link to={"/login"}>Login</Link>
            </p>
          </form>
        </Card>
      </div>
    </MenuLayout>
  );
}

export default Register;
