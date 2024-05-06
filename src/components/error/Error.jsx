import { useRouteError } from "react-router-dom";
import styles from "./Error.module.css";
import MainNavigation from "../../shared/UIElements/mainNavigation/MainNavigation";

function Error() {
  const error = useRouteError();
  let title = "An error occured!";
  let message = error?.data?.message || "Something went wrong!";

  if (error.status === 404) {
    title = "Not found";
    message = "Could not find resource";
  }
  if (error.status === 429) {
    title = "An error occured!";
    message = "Too many request";
  }
  return (
    <div>
      <MainNavigation main={false} />
      <main className={styles.error}>
        <h1>{title}</h1>
        <p>{message}</p>
      </main>
    </div>
  );
}

export default Error;
