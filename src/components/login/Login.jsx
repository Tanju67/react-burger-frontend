import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import MenuLayout from "../../shared/UIElements/MenuLayout";
import Input from "../../shared/formElements/Input";
import Card from "../../shared/UIElements/Card";
import { useForm } from "../../shared/hooks/useForm";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validator";
import Button from "../../shared/UIElements/Button";
import { useHttpRequest } from "../../shared/hooks/send-request";
import { useDispatch } from "react-redux";
import { authActions } from "../../shared/store/auth-slice";
import Spinner from "../../shared/UIElements/Spinner";

function Login() {
  const [inputHandler, formState] = useForm({
    email: { value: "", isValid: false },
    password: { value: "", isValid: false },
    isValid: false,
  });

  const { sendRequest, isLoading, error } = useHttpRequest();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    sendRequest(
      import.meta.env.VITE_BACKEND_URL + "/api/v1/auth/login",
      "POST",
      undefined,
      { email: formState.email.value, password: formState.password.value },
      {
        "Content-Type": "application/json",
      },
      (data) => {
        const user = { id: data.id, name: data.name, role: data.role };
        const token = data.token;
        dispatch(authActions.onLogin({ user, token }));
        navigate("/");
      }
    );
  };
  return (
    <MenuLayout title={"Login"} sidebar={false} cart={false}>
      <div className={styles.content}>
        <Card className={styles.formCard}>
          {isLoading && !error && <Spinner />}
          <h2>Login</h2>
          <form onSubmit={submitHandler}>
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
              validators={[VALIDATOR_MINLENGTH(6)]}
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
        {!isLoading && error && <p className={styles.error}>{error}</p>}
      </div>
    </MenuLayout>
  );
}

export default Login;
