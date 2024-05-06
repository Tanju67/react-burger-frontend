import React from "react";
import styles from "./UpdateMenu.module.css";
import Input from "../../shared/formElements/Input";
import { useForm } from "../../shared/hooks/useForm";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validator";
import Button from "../../shared/UIElements/Button";
import Card from "../../shared/UIElements/Card";
import { useHttpRequest } from "../../shared/hooks/send-request";
import ImageInput from "../../shared/formElements/ImageInput";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";

function UpdateMenu() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [inputHandler, formState] = useForm({
    title: { value: "", isValid: false },
    image: { value: "", isValid: false },
    isValid: false,
  });
  const navigate = useNavigate();

  const { sendRequest, isLoading, error } = useHttpRequest();

  const submitHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", formState.title.value);
    formdata.append("image", formState.image.value);

    console.log(formdata);

    const token = localStorage.getItem("token");

    sendRequest(
      import.meta.env.VITE_BACKEND_URL + `/api/v1/admin/${id}`,
      "PATCH",
      undefined,
      formdata,
      {
        Authorization: `Bearer ${token}`,
      },
      (data) => {
        console.log(data);
        navigate(0);
      },
      true
    );
  };
  return (
    <div className={styles.content}>
      <Card className={styles.formCard}>
        {isLoading && !error && (
          <BounceLoader
            color="#36d7b7"
            cssOverride={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "tarnslate(-50%,-50%)",
            }}
            size={30}
          />
        )}
        <h2>Update Menu</h2>
        <form onSubmit={submitHandler}>
          <Input
            id="title"
            element="input"
            type="text"
            label="Menu Title"
            placeholder="Menu Title"
            errorMsg="Please enter a menu title!"
            value={formState.title.value}
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
          <ImageInput
            id="image"
            element="text"
            label="Image"
            placeholder="Upload image"
            errorMsg="Please enter a valid image!"
            onInput={inputHandler}
          />

          <Button type={"submit"} disabled={!formState?.isValid} size={"md"}>
            Update Menu
          </Button>
        </form>
      </Card>
      {!isLoading && error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default UpdateMenu;
