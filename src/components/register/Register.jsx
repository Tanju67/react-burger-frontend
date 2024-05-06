import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import MenuLayout from "../../shared/UIElements/MenuLayout";
import { useForm } from "../../shared/hooks/useForm";
import Card from "../../shared/UIElements/Card";
import Input from "../../shared/formElements/Input";
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

function Register() {
  const [inputHandler, formState] = useForm({
    name: { value: "", isValid: false },
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
      import.meta.env.VITE_BACKEND_URL + "/api/v1/auth/register",
      "POST",
      undefined,
      {
        name: formState.name.value,
        email: formState.email.value,
        password: formState.password.value,
      },
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
    <MenuLayout title={"Register"} sidebar={false}>
      <div className={styles.content}>
        <Card className={styles.formCard}>
          {isLoading && !error && <Spinner />}
          <h2>Register</h2>
          <form onSubmit={submitHandler}>
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
              validators={[VALIDATOR_MINLENGTH(6)]}
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
        {!isLoading && error && <p className={styles.error}>{error}</p>}
      </div>
    </MenuLayout>
  );
}

export default Register;
