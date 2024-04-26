import React from "react";
import styles from "./Login.module.css";
import MenuLayout from "../../shared/UIElements/MenuLayout";
import Input from "../../shared/formElements/Input";
import Card from "../../shared/UIElements/Card";
import { useForm } from "../../shared/hooks/useForm";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MIN,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validator";
import Button from "../../shared/UIElements/Button";
import { Link } from "react-router-dom";

function Login() {
  const [inputHandler, formState] = useForm();
  return (
    <MenuLayout title={"Login"} sidebar={false}>
      <div className={styles.content}>
        <Card className={styles.formCard}>
          <h2>Login</h2>
          <form>
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
              Login
            </Button>
            <p>
              Doesn't have an account yet?
              <Link to={"/register"}>Register</Link>
            </p>
          </form>
        </Card>
      </div>
    </MenuLayout>
  );
}

export default Login;
