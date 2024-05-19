/* eslint-disable react/prop-types */
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import styles from "./Home.module.css";
import Header from "./Header";
import MainNavigation from "../../shared/UIElements/mainNavigation/MainNavigation";
import About from "./About";
import Menu from "./Menu";
import OrderHours from "./OrderHours";
import Footer from "../../shared/UIElements/footer/Footer";
import Spinner from "../../shared/UIElements/Spinner";

function Home() {
  const data = useLoaderData();
  return (
    <div className={styles.page}>
      <div className={styles.nav}>
        <MainNavigation />
      </div>
      <Header />
      <About />
      <div className={styles.bg}></div>
      <Suspense fallback={<Spinner box={true} />}>
        <Await resolve={data.data}>
          {(loadedData) => <Menu data={loadedData} />}
        </Await>
      </Suspense>
      <OrderHours />
      <Footer />
    </div>
  );
}

export default Home;
