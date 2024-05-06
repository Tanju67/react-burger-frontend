/* eslint-disable react/prop-types */
import styles from "./Home.module.css";
import Header from "./Header";
import MainNavigation from "../../shared/UIElements/mainNavigation/MainNavigation";
import About from "./About";
import Menu from "./Menu";
import OrderHours from "./OrderHours";
import Footer from "../../shared/UIElements/footer/Footer";

function Home({ data }) {
  return (
    <div className={styles.page}>
      <div className={styles.nav}>
        <MainNavigation />
      </div>
      <Header />
      <About />
      <div className={styles.bg}></div>
      <Menu data={data} />
      <OrderHours />
      <Footer />
    </div>
  );
}

export default Home;
